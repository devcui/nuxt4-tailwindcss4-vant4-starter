export type IntroUser = {
    avatar: string
    name: string
    desc: string
    items: IntroUserLink[]

}
export type IntroUserLink = {
    tag: string
    title: string
    link: string
}