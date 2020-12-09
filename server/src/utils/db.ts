import * as mongoose from 'mongoose';

class DB<T extends mongoose.Document> {
  constructor(public model: typeof mongoose.Model) {}

  public async read(query: object): Promise<mongoose.Query<T[], T>> {
    return await this.model.find(query);
  }

  public async create(document: T): Promise<T> {
    return await this.model.create(document);
  }

  public async update(document: T): Promise<mongoose.UpdateQuery<T>> {
    return await this.model.updateOne({ _id: document._id }, { ...document });
  }

  public async delete(_id: string): Promise<void> {
    await this.model.remove({ _id }, err => {
      console.error(err);
    });
  }
}

export default DB;