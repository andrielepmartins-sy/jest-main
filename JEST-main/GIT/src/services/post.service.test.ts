import { UserService } from "./user.service.js";
import { PostService } from "./post.service.js";

describe("Testing user service", () => {
    let userService: UserService
    let postService: PostService

    const title = "test"
    const content = "testx@jest.com"
    let postId = 0
    let authorId = 0

    beforeAll(async () => {
        userService = new UserService()
        postService = new PostService()

        const newUser = await userService.create({
            name: 'teste',
            email: 'testxx@jest.com',
            password: '123456789',
            role: 'DEFAULT' })

        authorId = newUser.id
    })

   it("should create a new user", async () => {
        const newPost = await postService.create({ title, content, authorId })
        postId = newPost.id
   })

//    it.skip("Should reat a new user", async () => {
//         const newPost = await postService.create({ title, content, authorId })

//         expect(newPost).toHaveProperty("id")
//         expect(newPost.content).toBe(content)
//     })

    // it("Should update a user ", async () => {
    //     const post = await postService.findById(email)

    //     const role = "ADMIN"
    //     const updated = await postService.update(post!.id, { title, content, authorId })

    //     expect(updated).toHaveProperty("id")
    //     expect(updated.email).toBe(content)
    // })

    // it("Should delete a user", async () => {
    //     const post = await postService.findById(email)
    //     const deleted = await postService.delete(post!.id)

    //     expect(deleted).toHaveProperty("id")
    //     expect(deleted.email).toBe(email)
    // })

})
