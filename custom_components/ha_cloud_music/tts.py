"""
百度语音外挂服务.
专门解决vlc播放器输出被截断的问题
"""
import asyncio
import logging

import aiohttp
from aiohttp.hdrs import REFERER, USER_AGENT
import async_timeout
import voluptuous as vol
import homeassistant.helpers.config_validation as cv

from homeassistant.components.tts import CONF_LANG, PLATFORM_SCHEMA, Provider
from homeassistant.helpers.aiohttp_client import async_get_clientsession


_LOGGER = logging.getLogger(__name__)

GOOGLE_SPEECH_URL = "https://api.jiluxinqing.com/api/service/tts?text="

CONF_BEFORE_MESSAGE = "before_message"
CONF_AFTER_MESSAGE = "after_message"

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Optional(CONF_BEFORE_MESSAGE, default=""): cv.string,
        vol.Optional(CONF_AFTER_MESSAGE, default=""): cv.string
    }
)

async def async_get_engine(hass, config, discovery_info=None):
    """Set up Google speech component."""
    return GoogleProvider(hass,  config)


class GoogleProvider(Provider):
    """The Google speech API provider."""

    def __init__(self, hass, config):
        """Init Google TTS service."""
        self.hass = hass
        self._before_message = config[CONF_BEFORE_MESSAGE]
        self._after_message = config[CONF_AFTER_MESSAGE]
        self.name = "百度语音"

    @property
    def default_language(self):
        """Return the default language."""
        return "zh-cn"

    @property
    def supported_languages(self):
        """Return list of supported languages."""
        return "zh-cn"

    async def async_get_tts_audio(self, message, language, options=None):
        """Load TTS from google."""
        websession = async_get_clientsession(self.hass)
        data = b""
        try:
            with async_timeout.timeout(10):
                message = self._before_message + message + self._after_message
                _LOGGER.info("输入文字：%s", message)
                request = await websession.get(
                    GOOGLE_SPEECH_URL + message, params=None, headers=None
                )

                if request.status != 200:
                    _LOGGER.error(
                        "Error %d on load URL %s", request.status, request.url
                    )
                    return None, None
                data += await request.read()

        except (asyncio.TimeoutError, aiohttp.ClientError):
            _LOGGER.error("Timeout for google speech")
            return None, None

        return "mp3", data
