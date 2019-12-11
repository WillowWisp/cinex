import React from 'react';
import classes from './MovieDetail.module.scss';
import { Button } from 'react-bootstrap';
import { IoMdAddCircleOutline } from "react-icons/io";

const MovieDetail = (props) => {
  const { movie } = props;
  return (
    <div className={classes['container']}>
      <div className={classes['title-and-screentypes']}>
        <div className={classes['title']}>
          {movie.title}
        </div>
        {/* <div className={classes['screentypes']}>
          { movie.screenTypes.map( type => (
            <div className={classes["type"]}>
              {type}
            </div>
          ) ) }
        </div> */}
      </div>
      <hr className={classes["line"]}/>
      <div className={classes['poster-and-movie-infos']}>
        <div className={classes['poster-and-buttons']}>
          <img className={classes["poster"]} src={movie.smallPoster} alt="movie-poster"/>
          <Button className={classes['small-button']} variant="dark" size="sm" block>Thêm vào wishlist</Button>
          <Button className={classes['small-button']} variant="dark" size="sm" block>Yêu thích</Button>
          <Button className={classes['buy-ticket-button']} variant="primary" size= "lg" block>Mua vé</Button>
        </div>
        <div className={classes['movie-infos']}>
          {/* <div>Batman v Superman: Dawn of Justice</div> */}
          <div className={classes['screentypes']}>
          { movie.screenTypes.map( type => (
            <div className={classes["type"]}>
              {type}
            </div>
          ) ) }
        </div>
          <hr className={classes["line"]}/>
          <div className={classes['rating-length-genres']}>
            {movie.rated + " | " + movie.length + " | " + movie.genres}
          </div>
          <hr className={classes["line"]}/>
          <div className={classes['details-and-cast']}>
            <div className={classes['details']}>
              <div className={classes['section-name-text']}>Thông tin</div>
              <div className={classes['normal-text']}>Đạo diễn: <span className={classes['sub-text']}>{movie.director}</span></div>
              <div className={classes['normal-text']}>Biên kịch: <span className={classes['sub-text']}>{movie.writers}</span></div>
              <div className={classes['normal-text']}>Quốc gia: <span className={classes['sub-text']}>{movie.country}</span></div>
              <div className={classes['normal-text']}>Ngôn ngữ: <span className={classes['sub-text']}>{movie.language}</span></div>
              <div className={classes['normal-text']}>Ngày khởi chiếu: <span className={classes['sub-text']}>{movie.releaseDate}</span></div>
            </div>
            <div className={classes['cast']}>
              <div className={classes['section-name-text']}>Diễn viên</div>
              { movie.cast.map(actor => (
                <div className={classes['normal-text'] + " " + classes['actor-name']}>
                  {/* <span><img className={classes['actor-img']} src={actor.imgUrl} alt="actor-img"/></span> */}
                  <span><div style={{ backgroundImage: "url(" + actor.imgUrl + ")" }} className={classes['actor-img']}></div></span>
                  {/* <span className={classes['actor-img']}></span> */}
                  {actor.name}  
                </div>
              )) }
              <div
                className={classes['sub-text'] + " " + classes['see-more']}
              ><IoMdAddCircleOutline size={24} className={classes['icon']}/>Xem thêm</div>
            </div>
          </div>
          <hr className={classes["line"]}/>
          <div className={classes['storyline']}>
            <div className={classes['section-name-text']}>Nội dung</div>
            <div className={classes['normal-text']}>{movie.storyline}</div>
          </div>
        </div>
      </div>
      {/* <hr className={classes["line"]}/> */}
    </div>
  );
}

export default MovieDetail;