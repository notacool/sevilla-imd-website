from sevilla.imd.website import PACKAGE_NAME
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabComplementaryServices:
    name = f"{PACKAGE_NAME}.vocabularies.complementary_services"

    @pytest.fixture(autouse=True)
    def _vocab(self, get_vocabulary, portal):
        self.vocab = get_vocabulary(self.name, portal)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, SimpleVocabulary)

    @pytest.mark.parametrize(
        "token",
        ["almacen", "cafeteria", "parking"],
    )
    def test_token(self, token):
        assert token in list(self.vocab.by_token)
