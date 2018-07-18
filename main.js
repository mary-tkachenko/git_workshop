axios.get('https://api.github.com/users/mary-tkachenko', { headers: {"Authorization" : `Bearer a1207dcac6ff12483b10d44bfff7321e0faf6ef0`} }).then((response) => {
	  // console.log(response);
	  const myInfo = response.data;
	  // console.log(myInfo);
	  let name = myInfo.name;
	  // console.log(name);

	  //storing name
	  let where_name = document.getElementById('name');
	  where_name.innerText = name;

	  //storing image 
	  let link = myInfo.avatar_url;
	  // console.log(link);
	  let where_image = document.getElementById('photo');
	  let image = document.createElement("img");
	  image.setAttribute("src", link);
	  where_image.appendChild(image);


	  //storing followers 
	  
	  let followers = myInfo.followers;
	  let where_followers = document.getElementById('followers');
	  where_followers.innerText += " " + followers;

	//storing following 
	  let following = myInfo.following;
	  let where_following = document.getElementById('following');
	  where_following.innerText += " " + following;

	//storing number of repos 
	  let repos = myInfo.public_repos;
	  let where_repos = document.getElementById('repos');
	  where_repos.innerText += " " + repos;


//addling to page (apply on logo)

	let home_link = myInfo.html_url;
	// console.log(home_link);
	let where_link_git = document.getElementById('logo').getElementsByTagName('a');
	// console.log(where_link_git);
	where_link_git[0].setAttribute("href", home_link);
	console.log(where_link_git);
	 where_image.appendChild(image);


})


axios.get('https://api.github.com/users/mary-tkachenko/repos', { headers: {"Authorization" : `Bearer a1207dcac6ff12483b10d44bfff7321e0faf6ef0`} }).then((response) => {
console.log(response);

//storing repositories 

	let repos_list = response.data;
	for (let i = 25; i < 30; i++ ) {
		let every_repos_name = repos_list[i].name;
		// console.log(every_repos_name);

		let where_repos = document.getElementsByTagName('ul')[0];
		// console.log(where_repos);
		let list = document.createElement("li");
		list.innerText = every_repos_name;
		console.log(list.innerText);
		console.log(list);
		where_repos.appendChild(list);
	}

})
