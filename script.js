//your JS code here. If required.
const form=document.getElementById("voteForm");
form.addEventListener("submit",function event() {
	event.preventDefault();
	const name=document.getElementById("name").value.trim();
	const age=document.getElementById("age").value.trim();
	if(!name || !age){
		alert("Please enetr valid details");
		return;
	}
	const checkAge=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if (parseInt(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
			
		},4000);
	});
	checkAge
        .then(message => alert(message))
        .catch(error => alert(error));
	
});