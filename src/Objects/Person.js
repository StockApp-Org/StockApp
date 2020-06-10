class Person {
    constructor(name, age, imgUrl) {
        this.Name = name;
        this.Age = age;
        this.ImgUrl = imgUrl;
        this.Id = null;
    }

    setId(id) {
        this.Id = id;
    }
}

export default Person;