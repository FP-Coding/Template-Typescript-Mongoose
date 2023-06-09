import { 
	model, 
	Model,
	models,
	Schema,
	UpdateQuery, 
} from 'mongoose';

abstract class GenericModel<T> {
	protected model: Model<T>;
	protected schema: Schema<T>;
	protected modelName: string;

	constructor(schema: Schema<T>, modelName: string) {
		this.schema = schema;
		this.modelName = modelName;
		this.model = models[modelName] || model(this.modelName, this.schema);
	}

	public async create(obj: T): Promise<T> {
		return this.model.create(obj);
	}

	public async find(id: string): Promise<T | null> {
		return this.model.findById(id);
	}

	public async list(): Promise<T[]> {
		return this.model.find();
	}

	public async update(id: string, obj: UpdateQuery<T>): Promise<T | null> {
		return this.model.findByIdAndUpdate(id, obj, { new: true });
	}

	public async delete(id: string): Promise<T | null> {
		return this.model.findByIdAndDelete(id);
	}
}

export default GenericModel;