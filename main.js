const {app , BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


let win = null;
//global reference to window object 



function createWindow()
{
	win = new BrowserWindow({windth:800,height:600,backgroundColor: "#D6D8DC"});

	win.loadURL(url.format({
		pathname : path.join(__dirname , 'index.html'),
		protocol : 'file:',
		slashes : true
	}));

	//win.webContents.openDevTools()
	
	win.on('closed',()=>{
		win = null;
	});

	win.once('ready-to-show', () => {
    	window.show()
  	})

}



app.on('ready',createWindow);
app.on('window-all-closed',()=>{
	if(process.platform!='darwin')
	{
		app.quit();
	}
});

app.on('activate',()=>{
	if(win==null){
		createWindow();
	}

});