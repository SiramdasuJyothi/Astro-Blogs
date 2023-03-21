var image = document.getElementsByClassName("a")
for(i=1;i<=image.length;i++)
{
    image[i-1].setAttribute("src","./ASSET/images/planets/"+i+".jpg")
    image[i-1].style.width="220px"
    image[i-1].style.height="220px"
}
console.log(image)
//this if for header

        var indval = 0;
        var imagesarr= ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"] 
      
        function inc()
        {
            indval++;
            if(indval>=imagesarr.length)
            {
                 indval = 0;
                 document.getElementById("header").style.backgroundImage="url(./ASSET/images/planets/"+imagesarr[indval]+")"
            }
            else{
                document.getElementById("header").style.backgroundImage="url(./ASSET/images/planets/"+imagesarr[indval]+")"
            }
        }
        function dec()
        {
            indval--;
            if(indval<0)
            {
               
                indval=imagesarr.length;
            document.getElementById("header").style.backgroundImage="url(./ASSET/images/planets/"+imagesarr[indval]+")"
            }
            else{
                document.getElementById("header").style.backgroundImage="url(./ASSET/images/planets/"+imagesarr[indval]+")"
            }
        }
        function openImag(pic,name,info)
        {
            document.getElementById("subWindow").removeAttribute("style")
            document.getElementById("subWindowImg").src='./ASSET/images/planets/'+pic+".jpg"
            document.getElementById("imageHeading").innerHTML=name;
            document.getElementById("imagpera").innerHTML=info;
        }
        function closeImag()
        {
            document.getElementById("subWindow").setAttribute("style","display:none")
        }