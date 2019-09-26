import React from 'react'
import YouTube from 'react-youtube'

/*Props
 - videoId: string, Youtube id of the video. Ex: https://www.youtube.com/watch?v=RE87rQkXdNw => 'RE87rQkXdNw'
 */
class YouTubePlayer extends React.Component {
    constructor(props){
        super(props)

        //YouTube parameters available on: https://developers.google.com/youtube/player_parameters
        this.opts = {
            playerVars: { 
                controls: 1,
                disablekb: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
                fs: 1,
                showinfo: 0,
                start: 0,
                cc_load_policy: 1,
                hl: "pt"
            }
        }
    }

    render(){
        return (
            <YouTube
                videoId={this.props.videoId}
                className='youtube-video' 
                containerClassName='youtube-video-container'
                opts={this.opts}
            />
        )
    }
}

export default YouTubePlayer