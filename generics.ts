interface Admin<T> {
    adminName: T,
    experience: boolean
}

const admin1: Admin<string> = {
    adminName : "Anya Forger",
    experience: true
}


// function
function moderator<work>(workItem: work[]): number{
    return workItem.length
}

moderator<string>(["besic setup", "find bug", "add new feture"])
moderator<number>([342,24,25])

// type
type Member<T> = {
    isMember: T
    show: string
}

const mem1: Member<boolean> = {
    isMember: true,
    show: "Welcome"
}


function dashboard<T>(userDashboard: T): [T, (isShow: T) => void] {
    let showing = userDashboard
    function show(isShow: T){
        showing = isShow
    }
    return [showing, show]
}

console.log(dashboard("Yes"));