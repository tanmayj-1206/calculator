var operand1 = '';
var operand2 = '';
var operator = '';
var solved = false;
var inputArea = document.getElementById('input-area');
var btn = document.getElementsByTagName('button');

// console.log(btn[0].innerHTML);

for(var i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function() {
        let val = this.innerHTML;

        if(val == '+' || val == '-' || val == '*' || val == '/')
        {
            operand1 = inputArea.innerHTML;
            operator = val;
            inputArea.innerHTML = '';
            solved = false;
        }

        else if(val == '=')
        {
            operand2 = inputArea.innerHTML;
            inputArea.innerHTML = eval(operand1 + ' ' + operator + ' ' + operand2);
            solved = true;
        }

        else if(val == 'AC')
        {
            inputArea.innerHTML = '';
            operand1 = '';
            operand2 = '';
            operator = '';
            solved = false;
        }

        else if(val == '%')
        {
            inputArea.innerHTML = eval(inputArea.innerHTML + ' / 100');
            solved = false;
        }

        else if(val == '.')
        {
            if(solved)
            {
                inputArea.innerHTML = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                solved = false;
            }
            var str = inputArea.innerHTML;
            if(!str.includes('.'))
            inputArea.innerHTML += '.';
        }

        else if(val == '+/-')
        {
            inputArea.innerHTML = eval(inputArea.innerHTML + ' * -1');
            solved = false;
        }

        else
        {
            if(solved)
            {
                inputArea.innerHTML = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                solved = false;
            }
            inputArea.innerText += val;
        }
    });
}

