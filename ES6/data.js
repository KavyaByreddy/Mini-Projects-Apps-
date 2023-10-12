let users=[{"id":1,"first_name":"Buiron","last_name":"Teape","email":"bteape0@nifty.com","gender":"Genderfluid","mobile":"779-552-5419"},
{"id":2,"first_name":"Stillman","last_name":"Greswell","email":"sgreswell1@usnews.com","gender":"Male","mobile":"560-137-7836"},
{"id":3,"first_name":"Dari","last_name":"Mealham","email":"dmealham2@seesaa.net","gender":"Female","mobile":"941-500-5004"},
{"id":4,"first_name":"Gun","last_name":"Wimpey","email":"gwimpey3@nydailynews.com","gender":"Non-binary","mobile":"125-225-8124"},
{"id":5,"first_name":"Sacha","last_name":"Hein","email":"shein4@toplist.cz","gender":"Agender","mobile":"440-173-1645"},
{"id":6,"first_name":"Mala","last_name":"Hulme","email":"mhulme5@boston.com","gender":"Female","mobile":"153-600-5353"},
{"id":7,"first_name":"Tabor","last_name":"Barneveld","email":"tbarneveld6@archive.org","gender":"Male","mobile":"316-929-2878"},
{"id":8,"first_name":"Perri","last_name":"Granleese","email":"pgranleese7@geocities.com","gender":"Female","mobile":"470-900-1212"},
{"id":9,"first_name":"Belinda","last_name":"Guerrero","email":"bguerrero8@reference.com","gender":"Female","mobile":"175-977-3324"},
{"id":10,"first_name":"Alberik","last_name":"Kattenhorn","email":"akattenhorn9@abc.net.au","gender":"Male","mobile":"778-914-3599"}]
let display_Data = ()=>{
    //alert("Tea")

    let rows=""
    users.forEach((user)=>{
        rows = rows + `<tr>
                            <td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td>${user.gender} </td>
                            <td>${user.mobile} </td>
                             <td>${user.email.split('@').pop()}
                       </tr>`
    })

document.getElementById('table_Data').innerHTML=rows
//document.getElementById('table_Data').innerHTML="Tea"
}