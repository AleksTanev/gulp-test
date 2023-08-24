const { series } = require("gulp");

const anotherTestTask = async (name) => {
    console.log("gulp file test task 2");
    
    await Promise.resolve(0)
    
    console.log("name: ", name);

};

const testTask= (cb) => {
    console.log("gulp file test task 1");
    console.log("callBack: ", cb);
    cb();
}

exports.test = series(testTask, anotherTestTask)

exports.default = testTask