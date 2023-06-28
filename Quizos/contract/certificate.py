import smartpy as sp

class Certificate(sp.Contract):
    def __init__(self):
        self.init(storedCertificates={})

    @sp.entry_point
    def mintCertificate(self, params):
        certificate = {
            "name": params.name,
            "score": params.score
        } 

        token_id = sp.sha256(sp.pack(certificate))
        self.data.storedCertificates[token_id] = certificate

@sp.add_test(name="Mint Certificate Test")
def test_mint_certificate():
    scenario = sp.test_scenario()

    # Initialize test contract
    contract = Certificate()

    # Define test parameters
    name = 12345  # Change the name parameter to sp.TIntOrNat or sp.TNat type
    score = 95

    # Create test account and call the mintCertificate entry point
    scenario.h1("Mint Certificate")
    scenario += contract
    scenario += contract.mintCertificate(name=name, score=score).run(sender=sp.test_account)

    # Check if certificate was minted successfully
    scenario.h2("Verify Certificate") 
    scenario.verify(len(contract.data.storedCertificates) == 1)
    scenario.verify(list(contract.data.storedCertificates.keys())[0] == sp.sha256(sp.pack({"name": name, "score": score})))
    scenario.verify(contract.data.storedCertificates[list(contract.data.storedCertificates.keys())[0]]["name"] == name)
    scenario.verify(contract.data.storedCertificates[list(contract.data.storedCertificates.keys())[0]]["score"] == score)