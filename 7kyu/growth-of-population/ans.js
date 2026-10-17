// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    // your code
    let years = 0
    //   p0 + (p0 * percent) + aug
    let pop = p0
    while (pop < p) {

        pop = Math.floor(pop + pop * (percent / 100) + aug)
        years += 1
    }
    return years
}