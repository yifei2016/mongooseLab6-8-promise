#Hämta fram den totala boytan, men gruppera per hus.

db.members.aggregate(
[
    {
        $match: {}
    },
    {
        $group: {
            _id: "$building",
            total: { $sum: "$lgh.yta" }
        }
    }
])
Använd nu också sortering i din aggreagate och se om du kan få ett resultat med alla lägenheter i storleksordning, från största till minsta.

db.members.aggregate(
[
    {
        $match: {}
    },
     {
         $group: {
           _id: null
           totalyta: {$sum: "$lgh.yta" } //can not get expected result, must use $project 
           //maxyta: {$max: "$lgh.yta" }
         }
     },
     {
        $sort: { "totalyta": -1 }  //$sort: { "maxyta": -1 }
    }
])
//db.lghFakta.aggregate(
... [
...     {
...         $match: {}
...     },
...      {
...          $group: {
...            _id: "$_id", 
...            totalyta: {$sum: "$storlek" }
...          }
...      },
...      {
...         $sort: { "totalyta": -1 }
...     }
... ])

##Fundera lite och ändra din aggregate så att du bara visar den största lägenheten.

#{ $max: <expression> }

db.members.aggregate(
[
    {
        $match: {}
    },
     {
         $group: {
           _id: "$building",
           max: {$max: "$lgh.yta"}
         }
     },
     {
        $sort: { "max": -1 }
    },
     { $limit: 1}

])

#Distinct
Visa vilka hus som finns i föreningen.
db.members.distinct("building")

Visa vilka olika avgifter som medlemmarna betalar.


#Skapa en view som skriver ut för- och efternamn samt lägenhetsnummer. Kalla den “adressLista”.
om man vill sortera nåt, man måste läser egenskaper först, t xt avgift, först man behöver avgift, ..
db.createView(
"adressLista",
"members",
[{
$project: { "name": { "first": "$name.first","last": "$name.last"}, "avgift": "{ $gt: [ "$lgh.avgift", 2500 ] }"
}]
)


db.createView(
"adressLista",
"members",
[{
$project: {  "avgift": "{ $gt: [ "$lgh.avgift", 2500 ] }"
}]
)
