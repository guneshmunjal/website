        let count = 0;
const btns=document.querySelectorAll(".btn") ;
        const value = document.querySelector("#counting");

        btn.forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                const styles =e.currentTarget.classlist;
                if (styles.contains("decrease")) {
                    count--;
                }
                else if (styles.contains("increase")) {
                    count++;
                }

                else {
                    count = 0;
                }

                
            }
            );
        });
    
function buttongiven() {
    return document.querySelectorAll(".btn");
}

