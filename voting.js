class Evoting {
    constructor() {
        this.candidates = []
        this.candidate;
        this.registeredVoters = new Set();
        this.votedVoters = new Set();
    }

    addCandidate(candidateId, name) {
        this.candidate = {}

        let exists = this.candidates.some(candidate => candidate.candidateId === candidateId);
        
            if (!exists) {
                this.candidate['candidateId'] = candidateId;
                this.candidate['name'] = name;
                this.candidate['numberOfVotes'] = 0;
                console.log('Candidate added successfully');
                
                this.candidates.push(this.candidate)
            } else {
                console.log("Candidate ID already exists");
            }
        
    }

    registerVoters(voterId) {
        if (this.registeredVoters.has(voterId)) {
            console.log('Voter already registered');
        } else {
            this.registeredVoters.add(voterId);
        }
    }

    castVote(voterId, candidateId) {
        if (!this.registeredVoters.has(voterId)) {
            console.log("Voter is not registered");
        } else if (!this.candidates.hasOwnProperty(candidateId)) {
            console.log("Candidate does not exist");
        } else if (this.votedVoters.has(voterId)) {
            console.log("Voters can't vote more than once");
        } else if (this.registeredVoters.has(voterId) && this.candidates.some(candidate => candidate.candidateId == candidateId)) {
            this.votedVoters.add(voterId)
            for (let candidate in this.candidates) {
                if (candidateId == this.candidates[candidate]['candidateId']) {
                    this.candidates[candidate]['numberOfVotes'] += 1
                }
            }
            console.log("You have voted successfully");
        }
    }

    getResults() {
        let winner = []
        let highestVotes = 0
        for (let candidate in this.candidates) {
            console.log(
                `The candidate ${this.candidates[candidate]["name"]} got a total of ${this.candidates[candidate]["numberOfVotes"]}`
            );
            if(this.candidates[candidate]['numberOfVotes'] > highestVotes){
                highestVotes = this.candidates[candidate]["numberOfVotes"]
            }else if(this.candidates[candidate]['numberOfVotes'] == highestVotes && highestVotes > 0){

            }
        }
        for(let candidate in this.candidates){
            if(this.candidates[candidate]['numberOfVotes'] == highestVotes && highestVotes){
                winner.push(this.candidates[candidate]['name'])
            }
        }

        console.log(winner.length > 1 ? `It is a tie between: ${winner.join(', ')}` : `The winner is ${winner[0]}`);
        

        // console.log(winner);    
    }
}

eVote = new Evoting();

eVote.addCandidate(1, 'Lola');
eVote.addCandidate(2, 'Bola');
eVote.addCandidate(3, 'Tola');
eVote.addCandidate(4, 'Fola');
eVote.addCandidate(5, 'Kola');
eVote.addCandidate(1, 'Wola');


eVote.registerVoters(1);
eVote.registerVoters(2);
eVote.registerVoters(3);
eVote.registerVoters(4);
eVote.registerVoters(5),
eVote.registerVoters(3);
eVote.registerVoters(6);

// console.log(eVote.registeredVoters);


eVote.castVote(1, 3); //successful
eVote.castVote(2, 3); //successful
eVote.castVote(3, 1); //successful
eVote.castVote(1, 2); //unsuccessful
eVote.castVote(9,3); //unsuccessful
eVote.castVote(2,10); //unsuccessful
eVote.castVote(4, 2);
eVote.castVote(5, 2);
eVote.castVote(6, 1);



// console.log(eVote.registeredVoters);

eVote.getResults()