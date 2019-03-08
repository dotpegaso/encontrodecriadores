import React from 'react';
import prop from 'prop-types';

const Burger = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.className} >
    
    <path d="M86.508,60.581c-0.552-0.428-0.988-0.912-1.378-1.408c-0.6-3.492-0.621-7.424-3.384-9.601   c2.209-3.514,2.39-7.65-0.229-11.687c0.348-0.167,0.691-0.349,1.024-0.569c0.771-0.511,1.054-1.673,0.304-2.356   c-0.649-0.592-1.203-1.07-1.749-1.49c0.645-0.077,1.291-0.154,1.938-0.235c0.875-0.109,1.345-0.809,1.414-1.507   c0.046-0.163,0.048-0.363-0.01-0.606l-0.282-1.772C80.169,12.545,63.273,5.666,47.208,7.534   c-13.97,1.625-34.881,12.04-33.729,28.468c-0.268,0.746-0.035,1.699,0.941,2.001c3.342,1.033,6.376,2.01,9.528,2.019   c0.073,0.28,0.237,0.543,0.51,0.757c-1.101,2.106-1.794,4.737-1.825,7.297c-0.175,0.035-0.354,0.102-0.536,0.221   c-5.837,3.82-5.281,9.262-5.209,15.484c-0.219,0.088-0.436,0.181-0.656,0.267c-2.027,0.793-4.155,1.185-6.036,2.309   c-2.627,1.571-1.945,4.343-0.244,6.27c2.042,2.313,6.475,1.81,9.173,1.893c0.199,0.006,0.392,0.024,0.584,0.043   c-0.03,0.37,0.102,0.758,0.475,1.091c3.22,2.875,6.345,5.653,10.55,6.897c0.138,0.307,0.292,0.612,0.477,0.918   c0.944,1.559,2.446,3.397,4.175,4.097c2.27,0.919,3.904-0.194,6.16-0.415c2.16-0.211,3.6,2.358,5.767,2.358   c1.421,0,2.868-1.599,3.19-2.925c0.024-0.005,0.045-0.004,0.07-0.01c1.285-0.317,4.188-0.194,5.943,0.036   c1.444,1.909,2.945,3.742,4.951,5.243c2.253,1.685,4.271,0.877,5.716-1.146c1.119-1.565,0.405-3.749-0.461-5.698   c0.01-0.006,0.02-0.008,0.03-0.014c4.603-2.591,8.579-5.977,12.694-9.252c2.346-1.866,3.793-3.589,4.54-6.157   c1.146,0.877,2.328,1.665,3.865,1.864c2.451,0.318,3.663-2.975,3.694-4.805C91.602,63.593,88.562,62.175,86.508,60.581z    M82.005,55.792c-0.246-0.128-0.52-0.233-0.816-0.322c0.136-1.194-0.246-2.368-1.432-3.422c0.049-0.048,0.092-0.099,0.141-0.148   C81.476,52.94,81.802,54.208,82.005,55.792z M43.441,69.321c-2.762,0.175-5.484-0.198-8.167-0.832   c-3.779-0.892-12.047-7.085-5.849-10.837c0.541,0.201,1.088,0.394,1.642,0.575c-1.513,2.101,0.214,4.59,2.645,6.203   c4.627,3.07,13.04,1.797,18.026-0.564c0.386-0.007,0.771-0.005,1.158-0.034c1.316-0.101,2.589-0.432,3.835-0.883   C54.345,67.55,48.571,68.997,43.441,69.321z M34.148,59.458c0.094-0.056,0.175-0.118,0.25-0.184   c1.499,0.465,2.989,0.949,4.412,1.547c1.943,0.816,3.954,1.553,6.005,2.106c-1.786,0.229-3.59,0.285-5.584,0.279   C36.437,63.199,31.762,60.878,34.148,59.458z M60.501,61.288c1.722-0.849,3.424-1.731,5.151-2.353   c2.129-0.766,4.357-0.52,6.479-1.346c1.898-0.74,3.668-2.406,5.321-3.603c0.021,0.019,0.034,0.039,0.057,0.058   c2.695,2.251-4.239,6.902-5.574,7.697c-3.555,2.118-8.109,2.874-12.111,1.777C60.111,62.825,60.338,62.081,60.501,61.288z    M78.581,38.867c5.546,7.055-3.157,15.879-10.41,16.573c-6.035,0.577-10.732,5.045-16.779,5.506   c-5.981,0.456-12.258-3.453-17.704-5.412c-2.621-0.942-6.309-0.789-7.482-3.867c-1.05-2.753-0.556-6.396,0.723-9.108   c0.826,0.648,1.625,1.33,2.411,2.032c-0.123-0.041-0.231-0.083-0.37-0.123c-1.861-0.547-2.649,2.349-0.798,2.893   c2.004,0.589,3.94,1.28,5.992,1.546c1.535,1.297,3.138,2.503,4.937,3.446c3.07,1.61,7.082-0.512,9.967-1.977   c8.373,1.296,20.397,0.351,26.456-6.331c1.296-1.429-0.819-3.557-2.121-2.121c-4.264,4.703-12.287,6.164-19.062,5.957   c3.809-1.711,7.652-3.294,11.474-5.038c3.394-1.547,6.282-3.309,10.081-3.701c0.895-0.092,1.779-0.187,2.644-0.341   C78.555,38.823,78.564,38.846,78.581,38.867z M79.014,35.699c-3.219,1.125-7.219,0.944-10.374,2.375   c-5.062,2.294-10.231,4.344-15.291,6.651c-3.922,1.789-9.459,6.754-13.981,4.383c-4.393-2.304-7.586-6.554-11.542-9.607   c0.436-0.122,0.875-0.257,1.323-0.427c6.42-2.439,12.45,1.798,18.808,2.283c4.869,0.371,8.796-1.051,13.091-3.193   c4.885-2.437,10.015-3.412,15.279-4.109C77.274,34.533,78.165,35.078,79.014,35.699z M16.456,35.513   C15.904,21.236,34.005,13.159,45.906,10.75c14.898-3.015,31.73,4.172,35.476,19.675c-5.46,0.608-11.174,0.964-16.361,2.652   c-5.4,1.758-9.576,5.298-15.515,5.397c-5.583,0.093-10.833-2.996-16.447-3.22c-2.218-0.088-4.319,0.779-6.345,1.548   C23.493,38.027,19.692,36.601,16.456,35.513z M22.999,51.336c0.508,2.005,1.578,3.759,3.358,4.909   c-0.821,0.811-1.353,1.738-1.63,2.744c-1.786-1.054-2.917-3.088-3.968-4.797c-0.015-0.024-0.034-0.042-0.05-0.065   C21.194,53.105,21.925,52.166,22.999,51.336z M19.803,58.187c0.855,1.176,1.814,2.245,2.998,3.063   c-0.98,0.433-1.96,0.863-2.942,1.289C19.808,61.055,19.731,59.588,19.803,58.187z M14.632,71.352   c-0.406-0.031-5.14-1.076-2.203-2.832c1.299-0.777,3.185-1.062,4.603-1.578c2.707-0.987,5.323-2.228,7.958-3.394   c0.14,0.419,0.303,0.84,0.5,1.265c0.71,1.534,1.787,2.774,3.08,3.773c-0.005,0.025-0.014,0.045-0.017,0.071   c-0.166,1.23-0.106,2.321,0.061,3.409c-0.087,0.043-0.176,0.093-0.264,0.159c-2.425,1.807-4.576-0.034-7.123-0.508   C19.07,71.316,16.812,71.519,14.632,71.352z M24.996,75.875c1.375,0.291,2.742,0.269,4.278-0.669   c0.298,1.314,0.4,2.578,0.562,3.813C28.057,78.226,26.492,77.117,24.996,75.875z M44.506,84.904   c-3.012-1.645-6.65,1.197-9.052-0.95c-1.991-1.779-2.677-3.901-2.89-6.498c-0.189-2.318-1.207-4.841-1.169-7.189   c2.229,1.023,4.712,1.595,6.989,1.854c3.044,0.347,6.52,0.291,9.812-0.377c-0.54,2.971,0.983,5.149,1.292,8.322   c0.081,0.832-1.47,2.516-1.643,3.506C47.194,87.3,46.638,86.068,44.506,84.904z M51.522,83.428c0.297-0.732,0.58-1.466,0.769-2.238   c0.303,0.388,0.617,0.775,0.946,1.164c0.344,0.406,0.675,0.818,0.999,1.231C53.327,83.447,52.432,83.378,51.522,83.428z    M61.416,87.995c-1.648-1.423-2.695-3.495-3.924-5.269c-2.596-3.746-5.792-6.063-6.172-10.992c-0.002-0.02-0.008-0.035-0.01-0.055   c0.04-0.145,0.079-0.29,0.134-0.439c0.056-0.15,0.078-0.29,0.088-0.425c2.683-0.974,5.061-2.468,6.737-4.624   c5.638,1.943,12.72,0.425,17.334-3.279c0.833-0.669,1.859-1.56,2.81-2.569C83.741,66.548,67.7,73.193,64.032,76.67   c-2.641,2.503-1.783,5.848-0.463,8.79C64.574,87.699,64.146,90.352,61.416,87.995z M76.545,74.245   c-3.586,2.854-7.074,5.735-11.062,8.017c-0.02-0.053-0.044-0.109-0.062-0.16c-1.289-3.574,4.323-6.058,6.589-7.509   c2.558-1.639,5.087-3.308,7.364-5.328c0.639-0.566,1.184-1.163,1.642-1.778c0.005,0.003,0.007,0.006,0.012,0.008   c0.114,0.061,0.219,0.133,0.329,0.197C80.71,70.744,79.095,72.216,76.545,74.245z M86.603,67.841   c-1.43-0.877-2.571-2.148-4.062-2.937c-0.062-0.032-0.121-0.051-0.182-0.074c0.572-2.035,0.163-4.166-1.442-6.175   c0.985,0.618,1.481,1.694,2.251,2.765c0.974,1.354,2.496,2.239,3.843,3.174c0.746,0.519,1.427,1.102,1.539,2.051   C88.712,68.014,87.747,68.543,86.603,67.841z"/><path d="M35.397,22.824c0.989-0.265,1.884-0.749,2.626-1.457c0.592-0.564,0.568-1.554,0-2.121c-0.588-0.588-1.53-0.564-2.121,0   c-0.383,0.365-0.717,0.528-1.303,0.686c-0.789,0.211-1.263,1.061-1.047,1.845C33.77,22.568,34.608,23.036,35.397,22.824z"/><path d="M54.064,20.324c0.763,0.298,1.645-0.321,1.845-1.047c0.234-0.851-0.287-1.548-1.048-1.845   c0.244,0.095,0.12,0.07-0.031-0.09c-0.13-0.136-0.248-0.281-0.378-0.417c-0.565-0.591-1.553-0.568-2.121,0   c-0.588,0.587-0.565,1.531,0,2.121C52.868,19.607,53.318,20.033,54.064,20.324z"/><path d="M45.713,16.271c0.855-0.028,1.642-0.283,2.364-0.74c0.689-0.437,0.963-1.328,0.539-2.052   c-0.402-0.686-1.361-0.977-2.052-0.539c-0.104,0.07-0.211,0.134-0.322,0.193c-0.171,0.091-0.212,0.11-0.124,0.058   c-0.09,0.03-0.183,0.053-0.276,0.073c-0.026,0.001-0.064,0.003-0.129,0.007c-0.817,0.027-1.5,0.662-1.5,1.5   C44.213,15.567,44.896,16.298,45.713,16.271z"/><path d="M43.969,22.511c0.771-0.212,1.287-1.085,1.047-1.867c-0.029-0.088-0.054-0.189-0.075-0.28   c-0.013-0.05-0.022-0.287-0.029-0.308C44.886,19.735,44.892,19,44.892,19c-0.001-2-3.001-2-3,0c0,0,0.016,1.596,0.232,2.302   C42.363,22.083,43.164,22.733,43.969,22.511z"/><path d="M54.957,14.253c0.591,0.196,1.183,0.382,1.786,0.536c0.791,0.202,1.625-0.249,1.845-1.047   c0.214-0.777-0.256-1.643-1.048-1.845c-0.603-0.154-1.195-0.339-1.786-0.536c-0.775-0.258-1.637,0.291-1.845,1.047   C53.684,13.227,54.182,13.996,54.957,14.253z"/><path d="M62.279,16.039c-0.104-0.047-0.076-0.029,0.085,0.053c0.092,0.055,0.183,0.113,0.271,0.175   c0.242,0.165,0.472,0.348,0.714,0.514c0.675,0.463,1.662,0.128,2.052-0.539c0.437-0.744,0.135-1.59-0.538-2.052   c-0.593-0.407-1.104-0.787-1.786-1.043c-0.766-0.289-1.644,0.314-1.845,1.047C60.999,15.037,61.515,15.75,62.279,16.039z"/><path d="M60.367,20.831c0.595,0.56,1.53,0.591,2.121,0c0.565-0.565,0.596-1.561,0-2.121c-0.382-0.359-0.76-0.599-1.072-0.893   c-0.595-0.56-1.53-0.591-2.121,0c-0.565,0.565-0.596,1.561,0,2.121C59.677,20.298,60.055,20.537,60.367,20.831z"/><path d="M55.902,22.639c-0.224,0.246-0.423,0.514-0.601,0.795c-0.054,0.089-0.107,0.178-0.161,0.267   c-0.039,0.065-0.057,0.098-0.065,0.12c-0.018,0.017-0.036,0.036-0.065,0.068c-0.551,0.604-0.598,1.523,0,2.121   c0.558,0.558,1.57,0.604,2.121,0c0.224-0.246,0.423-0.514,0.601-0.795c0.054-0.089,0.107-0.178,0.161-0.267   c0.039-0.065,0.057-0.098,0.066-0.12c0.017-0.017,0.035-0.036,0.064-0.068c0.55-0.604,0.599-1.523,0-2.121   C57.466,22.081,56.453,22.034,55.902,22.639z"/><path d="M38.077,16.423c0.051-0.024,0.065-0.031,0.086-0.041c0.095-0.037,0.19-0.072,0.286-0.106   c0.231-0.084,0.465-0.16,0.699-0.238c0.775-0.258,1.273-1.025,1.047-1.845c-0.208-0.756-1.069-1.306-1.845-1.047   c-0.606,0.202-1.208,0.412-1.786,0.687c-0.739,0.351-0.925,1.393-0.539,2.052C36.464,16.634,37.339,16.774,38.077,16.423z"/><path d="M31.059,20.295c0.361-0.362,0.707-0.742,0.949-1.196c0.384-0.722,0.188-1.627-0.539-2.052   c-0.684-0.4-1.668-0.183-2.052,0.539c-0.013,0.024-0.121,0.19-0.136,0.228c-0.11,0.125-0.227,0.244-0.343,0.361   c-0.578,0.578-0.578,1.543,0,2.121C29.516,20.873,30.482,20.874,31.059,20.295z"/>
    
    </svg>
)

export default Burger;

Burger.defaultProps = {
    fill: '#000',
    className: 'icon-burger'
}

Burger.propTypes = {
    fill: prop.string.isRequired,
    className: prop.oneOf(['icon-burger', 'burger'])
}