import React from 'react';
import prop from 'prop-types';

const Art = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.className} >
    
    <path d="M52.281,28.667c0-2.16-1.757-3.917-3.917-3.917s-3.917,1.757-3.917,3.917s1.757,3.917,3.917,3.917   S52.281,30.826,52.281,28.667z M46.948,28.667c0-0.781,0.636-1.417,1.417-1.417s1.417,0.636,1.417,1.417s-0.635,1.417-1.417,1.417   S46.948,29.448,46.948,28.667z"/><rect x="47.133" y="21" width="2.5" height="2.667"/><rect x="47.133" y="33.667" width="2.5" height="2.667"/><rect x="53.384" y="27.416" width="2.666" height="2.5"/><rect x="40.717" y="27.416" width="2.666" height="2.5"/><rect x="51.529" y="31.895" transform="matrix(-0.7072 -0.707 0.707 -0.7072 66.8117 93.9588)" width="2.666" height="2.5"/><rect x="42.572" y="22.938" transform="matrix(0.7071 0.7071 -0.7071 0.7071 29.9632 -23.961)" width="2.666" height="2.5"/><rect x="42.656" y="31.811" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 51.5147 87.6271)" width="2.5" height="2.666"/><rect x="51.612" y="22.854" transform="matrix(0.7071 0.7071 -0.7071 0.7071 32.5862 -30.2945)" width="2.5" height="2.666"/><rect x="30.583" y="51.083" width="37.217" height="2.5"/><rect x="34.833" y="55.583" width="9.665" height="2.5"/><rect x="47.167" y="55.583" width="17.084" height="2.5"/><rect x="30.583" y="59.917" width="22.278" height="2.5"/><rect x="55.457" y="59.917" width="12.344" height="2.5"/>
    <path d="M73.01,91.75l-1.151-3.333H85v-2.5H70.994L66.04,71.584h7.329V17.001H57.656v-4h-4.695V6.75h-7.044v6.251h-4.986v4H25.703   v54.583h4.709l-4.953,14.333H13.333v2.5h11.261l-1.152,3.333H7.833v2.5h85v-2.5H73.01z M28.203,49.25h42.667v15.916H28.203V49.25z    M52.435,46.75l-2.424-3.027l6.301-6.855l8.719,9.882H52.435z M49.232,46.75H33.254l8.152-9.775L49.232,46.75z M48.417,9.25h2.044   v3.751h-2.044V9.25z M43.431,15.501h11.726v1.5H43.431V15.501z M70.869,19.501V46.75h-2.504L56.349,33.132l-7.919,8.617   l-6.985-8.724L29.998,46.75h-1.795V19.501H70.869z M28.203,67.666h42.667v1.418H28.203V67.666z M48.417,84.986h1.167v2.598h-1.167   V84.986z M33.956,82.486l0.378-1.095h27.784l0.379,1.095H33.956z M39.912,71.584l4,4.833h2.004v2.475H35.199l2.525-7.308H39.912z    M48.417,78.892v-2.475h1.167v2.475H48.417z M45.088,73.917l-1.931-2.333h11.825l-1.77,2.333H45.088z M52.084,78.892v-2.475h2.371   l3.666-4.833h0.607l2.525,7.308H52.084z M28.109,91.75h-2.021l6.97-20.166h2.021L28.109,91.75z M30.755,91.75l2.337-6.764h12.824   v5.098h6.167v-5.098H63.36l2.338,6.764H30.755z M68.344,91.75l-6.97-20.166h2.021l6.97,20.166H68.344z"/>
    
    </svg>
)

export default Art;

Art.defaultProps = {
    fill: '#000',
    className: 'icon-art'
}

Art.propTypes = {
    fill: prop.string.isRequired,
    className: prop.oneOf(['icon-art', 'art'])
}