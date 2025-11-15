# Osteoderm-compiler
This is a compiler for my esolang Osteoderms, that focuses on looking like a stegosaur's plates and since i like Stegosaurs i created this esolang.

## Tutorial

^ prints text that you insert after the symbol. Eg. ^ Hello World! prints the text Hello World!
Numbers are in unary (^^^^^^^^^^^^^).
^//\ creates a new variable. ***VALID NAMES FOR VARIABLES***: 1 and ,/\ and /'\\. Created variables shall not have the ^ before them. Eg.: ^//\ /I ^^^^ creates a variable that has a value of 4.
/I is just the equal sign.
Input from user is stored in variables. The command is /\\. Eg. ^//\1 /| /\\ makes the variable "1" be the value of what the user inputs. Example: //\\ /I ^^^^
You can do addition with /̑\\/̑\\, subtraction with /̑\\/̑\\/̑\\, multiplication with /̑\\/̑\\/̑\\/̑\\ and division with /̑\\/̑\\/̑\\/̑\\/̑\\. Eg.
1. /̑\\2/̑\\1 adds 2 to 1, creating 3.
2. /̑\\/̑\\3/̑\\5 subtracts 3 from 5, creating 2.
3. /̑\\/̑\\2/̑\\/̑\\4 multiplies 2 by 4, creating 8.
4. /̑\\/̑\\/̑\\15/̑\\/̑\\45 divides 45 by 15, creating 3.

You start and end loops with /^\\. The number of ^ determines how many repeats should happen (/^\\ is infinite). Example: /^\\ ^ Hello World! /^\\ prints Hello World! an infinite amount of times.

The only 'if' statement is ^ //\\,/\\ /I ^^^^. It checks if variable ,/\\ has a value of 4. Of course, this is just an example and you can put other variables and values into the statement.
Breakdown:
^ means if

//\\,/\ means the ,/\ variable (or any variable, eg. 1 or /'\\)

/I means is equal to

^^^^ means four (or any value, but better it be in unary with ^ symbol)

And the line after states what happens if variable ... has a value of ...
