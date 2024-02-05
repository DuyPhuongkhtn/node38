import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ConfigService } from '@nestjs/config';
export declare class VideoController {
    private readonly videoService;
    private configService;
    constructor(videoService: VideoService, configService: ConfigService);
    create(createVideoDto: CreateVideoDto): string;
    findAll(): any;
    findOne(id: string): string;
    update(id: string, updateVideoDto: UpdateVideoDto): string;
    remove(id: string): string;
}
