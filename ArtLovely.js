//......Navbar......//
var navbar;
var sticky;

window.onload = function() 
{
    navbar = document.getElementById("Navigation");

    sticky = navbar.offsetTop;
};

function changeActiveNav(id) 
{
    //id is the id of the element calling the function

    var navDiv = document.getElementById("Navigation");

    //look through each a and change active class accordingly
    for (var i = 0; i < navDiv.children.length; i++) 
    {
        var a = navDiv.children[i];

        if (a.tagName != "A") 
        {
            continue;
        }

        if (a.id == id) 
        {
            if (!a.classList.contains("active"))
            {
			a.classList.add("active");
            }
        } 
        else 
        {
            a.classList.remove("active");
        }
    }
}

// When the user scrolls the page, execute function
window.onscroll = function() 
{
	if (!navbar)
        return;
    
    if (window.pageYOffset >= sticky) 
    {
        navbar.classList.add("sticky");
    } 
    else 
    {
        navbar.classList.remove("sticky");
    }
    
    
    var aboutme = document.getElementById("AboutMe");
    var portfolio = document.getElementById("Portfolio");
    var contact = document.getElementById("Contact");
    
    if (window.pageYOffset >= contact.offsetTop)
    {
        changeActiveNav("ContactNav");
    }
    
    else if (window.pageYOffset >= aboutme.offsetTop)
    {
        changeActiveNav("AboutMeNav");
    }
    
    else if (window.pageYOffset >= portfolio.offsetTop)
    {
        changeActiveNav("PortfolioNav");
    }
    
    
};




