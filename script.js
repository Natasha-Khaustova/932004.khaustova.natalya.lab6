
            let leftButton = document.getElementById('LeftColumn');
            let cat = document.getElementById('cat');
            
            let bothButton = document.getElementById('TwoColumns');
            
            
            let rightButton = document.getElementById('RightColumn');
            let dog = document.getElementById('dog');
            
            leftButton.addEventListener('click', e => {
                cat.style.width = "90%";
                dog.style.width = "10%";
                dog.children[0].style.display = "none";
                cat.children[0].style.display = "inline-block";
            });
            
            rightButton.addEventListener('click', e => {
                dog.style.width = "90%";
                cat.style.width = "10%";
                cat.children[0].style.display = "none";
                dog.children[0].style.display = "inline-block";
            });
            
            bothButton.addEventListener('click', e => {
                cat.children[0].style.display = "inline-block";
                dog.children[0].style.display = "inline-block";
                dog.style.width = "50%";
                cat.style.width = "50%";
            })
           