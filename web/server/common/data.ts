import * as Sequelize from "sequelize"
import * as path from 'path'

var seq = new Sequelize("db", "", "", {
	dialect: "sqlite",
	storage: path.join(__dirname, "../..", "db.sqlite3")
});

var Post = seq.define('Post', {
	ID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, 
	slug: { type: Sequelize.TEXT, unique: true, },
	title: Sequelize.TEXT,
	content: Sequelize.TEXT,
	publish: Sequelize.DATE,
	category_id: Sequelize.INTEGER,
	user_id: Sequelize.INTEGER,
}).sync()

var Category = seq.define('Category', {
	ID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, 
	slug: { type: Sequelize.TEXT, unique: true, },
	title: Sequelize.TEXT,
}).sync()

var Tag = seq.define('Tag', {
	ID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, 
	slug: { type: Sequelize.TEXT, unique: true, },
	title: Sequelize.TEXT,
}).sync()

var PostTag = seq.define('PostTag', {
	ID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, 
	post_id: Sequelize.INTEGER,
	tag_id: Sequelize.INTEGER,
}).sync()

var User = seq.define('User', {
	ID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	username: Sequelize.STRING(50),
	email: { type: Sequelize.STRING(255), unique: true },
	password: Sequelize.BLOB,
	signupDate: Sequelize.DATE,
}).sync()

export {
	Post,
	Category,
	Tag,
	PostTag,
	User,
}

export function upsert(db, model) {
	return model.ID ? db.update(model, { where: {ID: model.ID}}) : db.create(model)
}