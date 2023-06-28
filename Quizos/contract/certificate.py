import smartpy as sp

class Certificate(sp.Contract):
    def __init__(self):
        self.init(storedCertificates={})

    @sp.entry_point
    def mintCertificate(self, params):
        certificate = {
            "userid": params.userid,
            "score": params.score
        } 

        token_id = sp.sha256(sp.pack(certificate))
        self.data.storedCertificates[token_id] = certificate

@sp.add_test(userid="Mint Certificate Test")
def test_mint_certificate():
    scenario = sp.test_scenario()

    # Initialize test contract
    contract = Certificate()

    # Define test parameters
    userid = 12345  # Change the userid parameter to sp.TIntOrNat or sp.TNat type
    score = 95

    # Create test account and call the mintCertificate entry point
    scenario.h1("Mint Certificate")
    scenario += contract
    scenario += contract.mintCertificate(userid=userid, score=score).run(sender=sp.test_account)

    # Check if certificate was minted successfully
    scenario.h2("Verify Certificate") 
    scenario.verify(len(contract.data.storedCertificates) == 1)
    scenario.verify(list(contract.data.storedCertificates.keys())[0] == sp.sha256(sp.pack({"userid": userid, "score": score})))
    scenario.verify(contract.data.storedCertificates[list(contract.data.storedCertificates.keys())[0]]["userid"] == userid)
    scenario.verify(contract.data.storedCertificates[list(contract.data.storedCertificates.keys())[0]]["score"] == score)