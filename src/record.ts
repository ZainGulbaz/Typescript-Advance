type PagesInfo={
    id:number,
    info:string
}

type Pages=Record<"mainPage"|"indexPage"|"lastPage",PagesInfo>;

const pages:Pages={
    mainPage:{id:2,info:"hello world"},
    indexPage:{id:1,info:"bye world"},
    lastPage:{id:2,info:"bye world"}
}