
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            todo: String
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Task = mongoose.model("task", schema);
    return Task;
};