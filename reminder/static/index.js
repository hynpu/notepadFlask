function deleteNote(noteID){
    fetch("/delete_note", 
    {
        method:"POST", body:JSON.stringify({noteID:noteID})
    }
    ).then( (_res)=>{
        window.location.href = "/";
    }
    );
}