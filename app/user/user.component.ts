import {Component} from "@angular/core";
import {PostsService} from "../services/posts.service";

@Component ({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Sergey Negoda';
        this.email = 'sergry.negoda1186@gmail.com';
        this.address = {
            street: '12 Main st',
            city: 'Boston',
            state: 'MA'
        }
        this.hobbies = ['Sports', 'Fishing'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => this.posts = posts)
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: any) {
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string,
    city: string,
    state: string
}

interface Post {
    id: number;
    title: string;
    body: string;
}