from sevilla.imd.website import PACKAGE_NAME
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabManagementModels:
    name = f"{PACKAGE_NAME}.vocabularies.management_models"

    @pytest.fixture(autouse=True)
    def _vocab(self, get_vocabulary, portal):
        self.vocab = get_vocabulary(self.name, portal)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, SimpleVocabulary)

    @pytest.mark.parametrize(
        "token,title",
        [
            ["direct", "Direct"],
            ["indirect", "Indirect"],
        ],
    )
    def test_term(self, token, title):
        term = self.vocab.getTermByToken(token)
        assert term is not None
        assert term.title == title
