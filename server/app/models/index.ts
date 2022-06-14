import Project from "./project";
import Screenshot from "./screenshot";
import Tag from "./tag";
import Tech from "./tech";
import Text from "./texts";

Project.hasMany(Screenshot, {
    foreignKey: 'project_id',
    as: 'screenshots',
});

Screenshot.belongsTo(Project, {
    as: 'screenshots',
    foreignKey: 'project_id',
});


Project.hasMany(Text, {
    foreignKey: 'project_id',
    as: 'texts',
});

Text.belongsTo(Project, {
    as: 'screenshots',
    foreignKey: 'texts',
});

Project.belongsToMany(Tech, {
    as: 'techs',
    through: 'PROJ_TECH',
    foreignKey: 'project_id',
    otherKey: 'tech_id',
});

Tech.belongsToMany(Project, {
    as: 'projects',
    through: 'PROJ_TECH',
    foreignKey: 'tech_id',
    otherKey: 'project_id',
});

Project.belongsToMany(Tag, {
    as: 'tags',
    through: 'PROJ_TECH',
    foreignKey: 'project_id',
    otherKey: 'tag_id',
});

Tag.belongsToMany(Project, {
    as: 'projects',
    through: 'PROJ_TECH',
    foreignKey: 'tag_id',
    otherKey: 'project_id',
});

export { Project, Tech, Tag, Text, Screenshot };