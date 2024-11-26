function f1()
{
    const movieArr = ["Home Alone","Titanic", "Jaws", "Mission Impossible","The Matrix"]
    console.log(`The second movie in the array is:  ${movieArr[1]}`)
}

function f2()
{
    let movies = new Array(5)
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    console.log(`The second movie in the array is:  ${movies[1]}`)
}

function f3()
{
    let movies = new Array(5)
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"

    movies.splice(2,0,"Forrest Gump")
    console.log(`The length of the movies array is:  ${movies.length}`)
}

function f4()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"

    delete movies[0]

    console.log(`Movies array :  ${movies}`)

}

function f5()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    for (var x in movies)
    {
        console.log(`${movies[x]}`)
    }
}

function f6()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    for (var movie of movies)
    {
        console.log(`${movie}`)
    }
}

function f7()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    movies.sort()
    for (var movie of movies)
    {
        console.log(`${movie}`)
    }
}

function f8()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    let leastFavMovies = []
    leastFavMovies[0] = "Gladiator"
    leastFavMovies[1] = "Y2K"
    leastFavMovies[2] = "Elf"

    movies[7] = leastFavMovies

    console.log('Movies I like: \n\n')

    for (var movie of movies)
    {
        if (typeof(movie) == 'string')
            console.log(`${movie}`)
    }
    console.log('\n')
    console.log('Movies I regret watching: \n\n')

    for (var movie of movies)
    {
        if (typeof(movie) != 'string')
            for (var mov of movie)
            {
                console.log(`${mov}`)
            }
    }
}

function f9()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    let leastFavMovies = []
    leastFavMovies[0] = "Gladiator"
    leastFavMovies[1] = "Y2K"
    leastFavMovies[2] = "Elf"

    movies.push(leastFavMovies)      

    const arr1 = movies.filter(item => typeof item == "string");
    const arr2 = movies.filter(item => typeof item == "object");
    console.log('Movies in reverse order: \n\n')
    movies =arr1.concat(arr2).flat()
    movies.sort().reverse()
    console.log(`${movies}`)
    console.log('\n')
    
}

function f10()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    let leastFavMovies = []
    leastFavMovies[0] = "Gladiator"
    leastFavMovies[1] = "Y2K"
    leastFavMovies[2] = "Elf"

    movies.push(leastFavMovies)      

    const arr1 = movies.filter(item => typeof item == "string");
    const arr2 = movies.filter(item => typeof item == "object");
    movies =arr1.concat(arr2).flat()
    movies.sort().reverse()
    console.log('Last movie: \n\n')
    console.log(`${movies.pop()}`)
    console.log('\n')
    
}

function f11()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    let leastFavMovies = []
    leastFavMovies[0] = "Gladiator"
    leastFavMovies[1] = "Y2K"
    leastFavMovies[2] = "Elf"

    movies.push(leastFavMovies)      

    const arr1 = movies.filter(item => typeof item == "string");
    const arr2 = movies.filter(item => typeof item == "object");
    movies =arr1.concat(arr2).flat()
    movies.sort().reverse()
    console.log('First movie: \n\n')
    console.log(`${movies.shift()}`)
    console.log('\n')
    
}

function f12()
{
    let movies = []
    movies[0] = "Home Alone"
    movies[1] = "Titanic"
    movies[2] = "Jaws"
    movies[3] = "Mission Impossible"
    movies[4] = "The Matrix"
    movies[5] = "Moana"
    movies[6] = "Wicked"

    let leastFavMovies = []
    leastFavMovies[0] = "Gladiator"
    leastFavMovies[1] = "Y2K"
    leastFavMovies[2] = "Elf"

    movies.push(leastFavMovies)      

    const arr1 = movies.filter(item => typeof item == "string");
    const arr2 = movies.filter(item => typeof item == "object");
    movies =arr1.concat(arr2).flat()
    let movNotLike = ['Y2K','Elf','Gladiator']
    let movLike = ['E.T', 'Avatar', 'The Village']
    let arrIndex = []

    for (var mov of movNotLike)
    {
        let ind = movies.indexOf(mov)
        if ( ind >= -1)
            arrIndex.push(ind)
    }

    let x = 0
    for (var i of arrIndex)
    {
        movies[i] = movLike[x]
        x++
    }

    console.log('Movies I like: \n\n')
    console.log(`${movies}`)
    console.log('\n')
    
}

function f13()
{
    let movies = [["Home Alone", 1], ["Titanic", 2], ["Jaws", 3], ["The Matrix", 4], ["E.T", 5]]
    for (var movie of movies)
    {
        let name = movie.filter((item) => {
            return typeof item === 'string'
        })
        console.log(`${name}`)
    }
}

function f14()
{
    let employees = ['Ava','John', 'Ted', 'Robin', 'Mark']
    const showEmployee = (arr1) => {
        console.log('Employees: \n')
        for (var employee of arr1)
        {
            console.log(`${employee}`)
        }
    }
    showEmployee(employees)
}

function init()
{
    f14()
}   

init()