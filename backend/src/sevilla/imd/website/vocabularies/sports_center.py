from plone.dexterity.content import DexterityContent
from sevilla.imd.website import _
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


ACTIVITY = [
    ("aerostep", "Aerostep"),
    ("abdominales", "Abdominales"),
    ("apnea", "Apnea"),
    ("aquagym", "Aquagym"),
    ("aquamantenimiento", "Aquamantenimiento"),
    ("aquapilates", "Aquapilates"),
    ("artes-marciales", "Artes Marciales"),
    ("baile-moderno-kids", "Baile Moderno Kids"),
    ("baloncesto", "Baloncesto"),
    ("balonmano", "Balonmano"),
    ("balonmano-playa", "Balonmano Playa"),
    ("beisbol", "Béisbol"),
    ("bolos-montaneses", "Bolos montañeses"),
    ("cardio-combat", "Cardio Combat"),
    ("cardiobox", "Cardiobox"),
    ("ciclo-indoor", "Ciclo Indoor"),
    ("circuito-grupal", "Circuito Grupal"),
    ("circuito-perdida-peso", "Circuito Perdida Peso"),
    ("core-fitness", "Core Fitness"),
    ("cursos-de-natacion", "Cursos de natación"),
    ("danza-oriental", "Danza Oriental"),
    ("dragon-boat", "Dragon Boat"),
    ("ejercicios-acuaticos-para-la-salud", "Ejercicios acuáticos para la salud"),
    ("energy-power", "Energy Power"),
    ("entrenamiento-funcional", "Entrenamiento funcional"),
    ("escuela-para-la-salud", "Escuela para la salud"),
    ("estiramientos", "Estiramientos"),
    ("fitness", "Fitness"),
    ("fitness-balance", "Fitness Balance"),
    ("futbol", "Fútbol"),
    ("futbol-7", "Fútbol 7"),
    ("futbol-americano", "Fútbol Americano"),
    ("futbol-playa", "Fútbol playa"),
    ("futbol-sala", "Fútbol sala"),
    ("gap", "GAP"),
    ("gimnasia-de-mantenimiento", "Gimnasia de Mantenimiento"),
    (
        "gimnasia-de-mantenimiento-jovenes-adultos",
        "Gimnasia de Mantenimiento Jóvenes / Adultos",
    ),
    (
        "gimnasia-de-mantenimiento-senior-y-3er-edad",
        "Gimnasia de Mantenimiento Senior y 3ª Edad",
    ),
    ("gimnasia-ritmica-deportiva", "Gimnasia Rítmica-Deportiva"),
    ("gimnasio-adultos", "Gimnasio Adultos"),
    ("hidroterapia", "Hidroterapia"),
    ("hiit-circuito-alta-intensidad", "HIIT - Circuito Alta Intensidad"),
    ("karate-infantil", "Karate Infantil"),
    ("kumba", "Kumba"),
    ("lacrosse", "Lacrosse"),
    ("mini-basquet", "Mini básquet"),
    ("minitenis", "Minitenis"),
    ("movilidad", "Movilidad"),
    ("musculacion", "Musculación"),
    ("natacion", "Natación"),
    ("natacion-embarazadas", "Natación embarazadas"),
    ("natacion-funcional", "Natación funcional"),
    ("natacion-funcional-terapeutica", "Natación funcional terapéutica"),
    (
        "natacion-funcional-terapeutica-espalda",
        "Natación funcional terapéutica espalda",
    ),
    ("natacion-libre", "Natación libre"),
    ("natacion-para-acompanantes", "Natación para acompañantes"),
    ("natacion-para-adultos", "Natación para adultos"),
    ("natacion-para-bebes", "Natación para bebés"),
    ("natacion-para-discapacitados", "Natación para discapacitados"),
    ("natacion-para-jovenes-y-mayores", "Natación para jóvenes y mayores"),
    ("natacion-para-mayores-de-65", "Natación para mayores de 65"),
    ("natacion-para-peques-1", "Natación para 'Peques'"),
    ("natacion-para-peques-2", "Natación para peques"),
    ("natacion-primaria-y-secundaria", "Natación Primaria y Secundaria"),
    ("padel", "Pádel"),
    ("paddel-surf", "Paddel Surf"),
    ("patinaje-artistico", "Patinaje Artístico"),
    ("petanca", "Petanca"),
    ("pilates", "Pilates"),
    ("piraguismo", "Piragüismo"),
    ("power-pump", "Power Pump"),
    ("programa-combinado", "Programa Combinado"),
    ("pump", "Pump"),
    ("regata", "Regata"),
    ("rugby", "Rugby"),
    ("sofball", "Sofball"),
    ("streching", "Streching"),
    ("tai-chi", "Tai-Chi"),
    ("tenis", "Tenis"),
    ("tenis-de-mesa", "Tenis de Mesa"),
    ("tonificacion", "Tonificación"),
    ("tonificacion-y-estiramientos", "Tonificación y Estiramientos"),
    ("voleibol", "Voleibol"),
    ("voley-playa", "Vóley playa"),
    ("yoga", "Yoga"),
    ("zumbon", "Zumbón"),
    ("zumbon-familiar", "Zumbón Familiar"),
    ("zumbon-kids", "Zumbón Kids"),
]

SPORTS_SPACE = [
    ("bolera-montanesa", "Bolera montañesa"),
    ("campo-de-beisbol-de-cesped-artificial", "Campo de béisbol de césped artificial"),
    ("campo-de-futbol-7", "Campo de fútbol 7"),
    ("campo-de-futbol-7-de-albero", "Campo de fútbol 7 de albero"),
    ("campo-de-futbol-de-albero", "Campo de fútbol de albero"),
    ("campo-de-futbol-de-cesped-artificial", "Campo de fútbol de césped artificial"),
    ("campo-de-petanca", "Campo de petanca"),
    ("campo-de-regatas", "Campo de regatas"),
    ("campo-de-rugby", "Campo de rugby"),
    ("circuito-de-automodelismo", "Circuito de automodelismo"),
    ("circuito-exterior", "Circuito exterior"),
    ("equipamiento-para-tenis-de-mesa", "Equipamiento para tenis de mesa"),
    ("gimnasio", "Gimnasio"),
    ("pabellon-polideportivo-cubierto", "Pabellón polideportivo cubierto"),
    ("pantalan-para-embarcaciones", "Pantalán para embarcaciones"),
    ("piscina", "Piscina"),
    ("piscina-cubierta", "Piscina cubierta"),
    ("pista-automodelismo", "Pista automodelismo"),
    ("pista-polideportiva", "Pista polideportiva"),
    ("pista-de-arena", "Pista de arena"),
    ("pista-de-atletismo", "Pista de Atletismo"),
    ("pista-de-atletismo-de-tierra", "Pista de atletismo de tierra"),
    ("pista-de-badminton", "Pista de bádminton"),
    ("pista-de-baloncesto", "Pista de baloncesto"),
    ("pista-de-balonmano", "Pista de balonmano"),
    ("pista-de-frontenis", "Pista de frontenis"),
    ("pista-de-futbol-sala", "Pista de fútbol sala"),
    ("pista-de-hockey-patines", "Pista de hockey patines"),
    ("pista-de-minitenis", "Pista de minitenis"),
    ("pista-de-padel", "Pista de pádel"),
    ("pista-de-running", "Pista de Running"),
    ("pista-de-skate-y-monopatines", "Pista de skate y monopatines"),
    ("pista-de-squash", "Pista de squash"),
    ("pista-de-tenis", "Pista de tenis"),
    ("pista-de-voleibol", "Pista de voleibol"),
    ("pista-de-voley-playa", "Pista de voley-playa"),
    ("pista-polideportiva-cesped-artifici", "Pista polideportiva de césped artificial"),
    ("pista-polideportiva-exterior-cubierta", "Pista polideportiva exterior cubierta"),
    ("rocodromo", "Rocódromo"),
    ("sala-de-aerobic", "Sala de aeróbic"),
    ("sala-de-artes-marciales", "Sala de artes marciales"),
    ("sala-de-boxeo", "Sala de boxeo"),
    ("sala-de-musculacion", "Sala de musculación"),
    ("sala-fitness", "Sala fitness"),
    ("sala-multiusos", "Sala Multiusos"),
    ("sala-polivalente", "Sala polivalente"),
    ("zona-spa", "Zona Spa"),
]

COMPLEMENTARY_SERVICES = [
    ("area-social", "Área Social"),
    ("almacen", "Almacén"),
    ("ambigu", "Ambigú"),
    ("aseos", "Aseos"),
    ("aseos-publicos", "Aseos Públicos"),
    ("ascensor-elevador", "Ascensor / Elevador"),
    ("aulas-de-formacion", "Aulas de formación"),
    ("botiquin", "Botiquín"),
    ("cafeteria", "Cafetería"),
    ("casa-de-botes", "Casa de botes"),
    ("centro-de-belleza", "Centro de belleza"),
    ("cerramiento-exterior", "Cerramiento exterior"),
    ("circuito-de-automodelismo", "Circuito de automodelismo"),
    ("enfermeria", "Enfermería"),
    ("grada", "Grada"),
    ("iluminacion-nocturna", "Iluminación nocturna"),
    ("oficinas", "Oficinas"),
    ("oficina-de-administracion", "Oficina de administración"),
    ("parking", "Parking"),
    ("pozo-de-riego", "Pozo de riego"),
    ("recepcion", "Recepción"),
    ("restaurante", "Restaurante"),
    ("sala-de-entretenimiento", "Sala de entretenimiento"),
    ("sala-de-reuniones", "Sala de reuniones"),
    ("solarium", "Solarium"),
    ("taquillas", "Taquillas"),
    ("vestibulo", "Vestíbulo"),
    ("vestuarios", "Vestuarios"),
    ("zona-ajardinada", "Zona ajardinada"),
    ("zona-spa", "Zona Spa"),
]


@provider(IVocabularyFactory)
def activities(context) -> SimpleVocabulary:
    """Available activities for a Sports Center."""
    terms = []
    for token, title in ACTIVITY:
        terms.append(SimpleTerm(token, token, title))
    return SimpleVocabulary(terms)


@provider(IVocabularyFactory)
def sports_space(context) -> SimpleVocabulary:
    """Available sports spaces for a Sports Center."""
    terms = []
    for token, title in SPORTS_SPACE:
        terms.append(SimpleTerm(token, token, title))
    return SimpleVocabulary(terms)


@provider(IVocabularyFactory)
def complementary_services(context) -> SimpleVocabulary:
    """Available complementary services for a Sports Center."""
    terms = []
    for token, title in COMPLEMENTARY_SERVICES:
        terms.append(SimpleTerm(token, token, title))
    return SimpleVocabulary(terms)


@provider(IVocabularyFactory)
def management_models(context: DexterityContent):
    """Available Management models for a Sports Center."""
    terms = []
    terms.append(SimpleTerm(value="direct", token="direct", title=_("Direct")))
    terms.append(SimpleTerm(value="indirect", token="indirect", title=_("Indirect")))
    return SimpleVocabulary(terms)
