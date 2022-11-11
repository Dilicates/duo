const SteamUser = require('steam-user');



const user = new SteamUser();



const logOnOptions = {

	accountName: 'CumMaster9634',  //Enter here your account login

	password: 'Void_da9634'		 //Enter your password

}


user.logOn(logOnOptions);



user.on('loggedOn', () => {

	console.log(logOnOptions.accountName + ' - Successfully logged on');

	user.setPersona(1);                 //1 - online, 7 - invisible

	user.gamesPlayed([730]);    //List app IDs

});
