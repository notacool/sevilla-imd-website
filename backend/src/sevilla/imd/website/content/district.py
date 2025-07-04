from plone.dexterity.content import Container
from plone.supermodel import model
from zope.interface import implementer


# from sevilla.imd.website import _


class IDistrict(model.Schema):
    """Marker interface and Dexterity Python Schema for District"""


@implementer(IDistrict)
class District(Container):
    """Content-type class for IDistrict"""
