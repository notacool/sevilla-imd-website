from plone.app.textfield import RichText
from plone.dexterity.content import Item
from plone.namedfile import field as namedfile
from plone.supermodel import model
from sevilla.imd.website import _
from zope import schema
from zope.interface import implementer


class ISportsCenter(model.Schema):
    """Marker interface and Dexterity Python Schema for SportsCenter"""

    image = namedfile.NamedBlobImage(
        title=_("Image"),
        description=_("Please, load a Sports Center image."),
        required=False,
    )

    management_model = schema.Choice(
        title=_("Management model"),
        description=_("Please, select a management model"),
        default="direct",
        vocabulary="sevilla.imd.website.vocabularies.management_models",
        required=True,
    )

    activity = schema.List(
        title=_("Activity"),
        description=_(
            "Please, select an option from the left column and move it to the "
            "right column."
        ),
        value_type=schema.Choice(
            source="sevilla.imd.website.vocabularies.activities",
        ),
        required=False,
        missing_value=[],
        default=[],
    )

    sports_space = schema.List(
        title=_("Sports Space"),
        description=_(
            "Please, select an option from the left column and move it to the "
            "right column."
        ),
        value_type=schema.Choice(
            source="sevilla.imd.website.vocabularies.sports_space",
        ),
        required=False,
        missing_value=[],
        default=[],
    )

    complementary_services = schema.List(
        title=_("Complementary Services"),
        description=_(
            "Please, select an option from the left column and move it to the "
            "right column."
        ),
        value_type=schema.Choice(
            source="sevilla.imd.website.vocabularies.complementary_services",
        ),
        required=False,
        missing_value=[],
        default=[],
    )

    text = RichText(
        title=_("label_text", default="Text"),
        description="",
        required=False,
    )

    external_link = schema.URI(
        title=_("External Link"),
        description=_(
            "This link will be visible in the case of Indirect Management. Please, "
            "fills with the prefix https://..."
        ),
        required=False,
    )

    indoor_physical_activity_schedule = namedfile.NamedBlobFile(
        title=_("Indoor Physical Activity Schedule"),
        description=_(
            "Please, load a document with the Indoor Physical Activity Schedule "
            "information."
        ),
        required=False,
    )

    water_activities_schedule = namedfile.NamedBlobFile(
        title=_("Water Activities Schedule"),
        description=_(
            "Please, load a document with the Water Activities Schedule information."
        ),
        required=False,
    )

    coordinates = schema.TextLine(
        title=_("Coordinates"),
        description=_("Please, fills the latitude and longitude values"),
        required=False,
    )


@implementer(ISportsCenter)
class SportsCenter(Item):
    """Content-type class for ISportsCenter"""
