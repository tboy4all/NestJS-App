import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import { Repository } from 'typeorm';
import CreateSubscriberDto from './dto/createSubscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(Subscriber)
    private subscribersRepository: Repository<Subscriber>,
  ) {}

  async addSubscriber(subscriber: CreateSubscriberDto) {
    const newSubscriber = await this.subscribersRepository.create(subscriber);
    await this.subscribersRepository.save(newSubscriber);
    return newSubscriber;
  }

  async getAllSubscribers() {
    return this.subscribersRepository.find();
  }
}
