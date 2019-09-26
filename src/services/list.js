class ListService {

    shuffle(list){
        return list.sort(() => (Math.round(Math.random()) - 0.5))
    }

}

export default (new ListService())

