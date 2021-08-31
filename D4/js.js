

function addParticipant(){


    let inputNode = document.getElementById('participants')
    let participantNode = document.createElement('div')
    participantNode.classList.add('participant')
    participantNode.innerHTML=inputNode.value
    document.getElementsByTagName('body')[0].appendChild(participantNode) 



}


//add teams

function addTeams(){
    let inputNode = document.getElementById('numberOfTeams')


    for(let i=0; i<inputNode.value; i++){
        let teams = document.createElement('ul')
        teams.classList.add('list-group')
        document.getElementsByTagName('body')[0].appendChild(teams)
        console.log('teams')



    }
     
}


//devide teams


//sort participans in teams
function sortingParticipants(_numberOfTeams){
        let participantsNode=document.querySelectorAll('.participant')


        for(let i=0; i<participantsNode.length; i++){
            let participant = Math.floor(Math.random() *participantsNode.length)

            checkingParticipants(participant)
        }
            
        
        addingToList()
         
}


function checkingParticipants(_participant){
    let participantsNode=document.querySelectorAll('.participant')
    let teamsNumber=document.getElementsByTagName('ul').length
    for(let i=0; i<participantsNode.length;i++){


        if(participantsNode[_participant].innerHTML!==participantsNode[i].innerHTML){
            
            console.log(participantsNode[_participant].innerHTML)
            //addingToList(_participant,teamsNumber )


        }else{
        }

    }

}


function addingToList(_participant, _numberOfTeams){
    let participantsNode=document.querySelectorAll('.participant')
    let array = []
    console.log()
    for(let i =0; i<_numberOfTeams;i++){
        
        let team = []
        array.push(team)

        for(let v; v<_numberOfTeams;v++){
            team.push(participantsNode[v])
            console.log(team)
            
        }

    }
    


}