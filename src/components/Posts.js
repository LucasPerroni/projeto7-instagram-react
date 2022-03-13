let posts = [
    {profileName: "meowed", 
    profileImg: "meowed.png", 
    image: "meowed-cat.png", 
    likes: {likeImg: "respondeai.png", likeName: "respondeai", likeNumber: 105.672},
    comments: [{commentName: "hello.world", comment: "Hello world!"},
    {commentName: "hello.world", comment: "^-^"}]}, 

    {profileName: "barked", 
    profileImg: "barked.png", 
    image: "barked-img.png", 
    likes: {likeImg: "wesley.png", likeName: "ascronicasdewesley", likeNumber: 67.392},
    comments: [{commentName: "animaizinhosfofosofc", comment: "CUTE"}, 
    {commentName: "barked", ref: "@animaizinhosfofosofc",  comment: "hehe"}]}, 

    {profileName: "clannad_official_", 
    profileImg: "clannad.png", 
    image: "clannad-img.png", 
    likes: {likeImg: "lucas.jpg", likeName: "lucasbondep", likeNumber: 89},
    comments: [{commentName: "lucasbondep", comment: "Recomendo, é um ótimo anime/visual novel"}]}, 

    {profileName: "respondeai", 
    profileImg: "respondeai.png", 
    video: {mp4: "video.mp4", ogv: "video.ogv"}, 
    likes: {likeImg: "animais.png", likeName: "animaizinhosfofosofc", likeNumber: 24.591},
    comments: [{commentName: "fotosfofasdegatosfofos", ref: "@animaizinhosfofosofc",  comment: "BEAR"}]}    
]

export default function Posts() {
    return (
        <div class="images">

            {posts.map(
                ({profileName, profileImg, image, video, likes, comments=[]}) =>
                <Post profileName={profileName} profileImg={profileImg} image={image} 
                video={video} likes={likes} comments={comments} />
            )}

        </div>
    )
}

function Post(props) {
    const {profileName, profileImg, image, video, likes, comments} = props
    return (
        <article>

            <PostProfile  profileName={profileName} profileImg={profileImg} />

            {image ? <img src={`images/${image}`} alt="post" /> : <Video video={video} />}

            <Icons />

            <Likes likes={likes} />

            <div class="comentarios">
                <Comments comments={comments} />
            </div>

            <Input />

        </article>
    )
}

function PostProfile({profileImg, profileName}) {
    return (
        <div class="imagem-topo">
            <div>
                <img src={`images/${profileImg}`} alt="post's profile" />
                <p>{profileName}</p>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}

function Video({video}) {
    const {mp4, ogv} = video
    return (
        <video controls autoplay muted>
            <source src={`images/${mp4}`} type="video/mp4" />
            <source src={`images/${ogv}`} type="video/ogg" />
        Seu navegador não suporta vídeos.
        </video>
    )
}

function Icons() {
    return (
        <div class="imagem-icons">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    )
}

function Likes({likes}) {
    const {likeImg, likeName, likeNumber} = likes
    return (
        <div class="imagem-fim">
            <img src={`images/${likeImg}`} alt="profile" />
            <p>Curtido por <strong>{likeName}</strong> e <strong>outras {likeNumber} pessoas</strong></p>
        </div>
    )
}

function Comments({comments}) {
    return (
        comments.map(
            ({commentName, ref, comment}) => 
            <div class="comentario">
                <div>
                    <h4>{commentName}</h4>
                    <p><span>{ref}</span> {comment}</p>
                </div>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        )
    )
}

function Input() {
    return (
        <div class="caixa-comentario">
            <ion-icon name="happy-outline"></ion-icon>
            <input type="text" />
            <p>Publicar</p>
        </div>
    )
}
