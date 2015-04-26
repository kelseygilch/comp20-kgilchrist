README.txt
Kelsey Gilchrist
Assignment 4

Everything has been implemented correctly to the best of my knowledge. I tried to use the $where and db.eval() commands to inject javascript into the database but could not figure how to do it.
I also tried to query using a function by doing: 
secure-fjord-9926.herokuapp.com/location.json?login=function(){return this.login =='mchow';};
but it returned an empty string rather than all the listings that had login of mchow like I was trying to do to show that a function could be passed to /location.json rather than just a string. 

I discussed the syntax of login[$ne] with Dane Roberts.
I looked at the example report by Gabe Jacobs and the links on the assignment page for ideas on how to format my report and ways to attack the application. 

I spent about 20 hours on this assignment. 