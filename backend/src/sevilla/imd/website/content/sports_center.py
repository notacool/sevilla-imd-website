# from plone.app.textfield import RichText
from plone.app.textfield import RichText as RichTextField
from plone.app.z3cform.widgets.richtext import RichTextFieldWidget
from plone.autoform import directives
from plone.dexterity.content import Item
from plone.namedfile import field as namedfile
from plone.supermodel import model
from sevilla.imd.website import _
from sevilla.imd.website.vocabularies.sports_center import ACTIVITY
from sevilla.imd.website.vocabularies.sports_center import COMPLEMENTARY_SERVICES
from sevilla.imd.website.vocabularies.sports_center import SPORTS_SPACE

# from plone.app.z3cform.widget import InAndOutWidget
from zope import schema
from zope.interface import implementer


class ISportsCenter(model.Schema):
    """Marker interface and Dexterity Python Schema for SportsCenter"""

    # If you want, you can load a xml model created TTW here
    # and customize it in Python:

    # model.load('sports_center.xml')

    # fieldset('Images', fields=['Image', 'advertisement'])
    image = namedfile.NamedBlobImage(
        title=_("Image"),
        description=_("Please, load a Sports Center image."),
        required=False,
    )

    # directives.widget(management_model=RadioFieldWidget)
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
        # value_type=schema.Choice(
        #     values=["Beginner", "Advanced", "Professional"],
        # ),
        value_type=schema.Choice(
            values=ACTIVITY,
        ),
        # value_type = schema.Choice(
        #     source="sevilla.imd.website.vocabularies.activities",
        # ),
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
        # value_type=schema.Choice(
        #     values=["Beginner", "Advanced", "Professional"],
        # ),
        value_type=schema.Choice(
            values=SPORTS_SPACE,
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
        # value_type=schema.Choice(
        #     values=["Beginner", "Advanced", "Professional"],
        # ),
        value_type=schema.Choice(
            values=COMPLEMENTARY_SERVICES,
        ),
        required=False,
        missing_value=[],
        default=[],
    )

    # directives.order_before(water_activities_schedule="*")
    # directives.order_before(indoor_physical_activity_schedule="*")
    text = RichTextField(
        title=_("label_text", default="Text"),
        description="",
        required=False,
    )
    directives.widget("text", RichTextFieldWidget)
    # model.primary("text")
    # searchable("text")

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

    # directives.read_permission(notes='cmf.ManagePortal')
    # directives.write_permission(notes='cmf.ManagePortal')
    # notes = RichText(
    #     title=_(u'Secret Notes (only for site-admins)'),
    #     required=False
    # )


@implementer(ISportsCenter)
class SportsCenter(Item):
    """Content-type class for ISportsCenter"""
