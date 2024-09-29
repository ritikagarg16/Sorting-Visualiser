async function bubble(){
    const ele = document.querySelectorAll(".sort");
    document.getElementById("Time_Worst").innerText = "O(N)";
    document.getElementById("Time_Average").innerHTML = "&Theta;(N<sup>2</sup>)";  // Θ (Theta) symbol
    document.getElementById("Time_Best").innerHTML = "&Omega;(N<sup>2</sup>)";     // Ω (Omega) symbol
    
    console.log("JavaScript is running");



    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    
    for(let i=0; i<ele.length-1; i++)
    {
        for(j=0; j<ele.length-i-1; j++)
        {
            ele[j].style.background='red';
            ele[j+1].style.background='red';
    
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await delay(time);
                swap(ele[j], ele[j+1]);
            }
    
            ele[j].style.background='yellow';
            ele[j+1].style.background='yellow';
        }
    
        ele[ele.length-i-1].style.background='#47ff41ea';
    }
    ele[0].style.background='#47ff41ea';
    }
    document.getElementById('bubble').addEventListener("click", async function(){
        disableSizeSlider();
        disableSortingBtn();
        await bubble();
        enableSizeSlider();
        enableSortingBtn();
    });
    