const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVaZOqOBT9L/mKPbIoLlVdNSwqghsCblPzIZAgCAKdBBRf+d+n0O7pV/WW6eFTKiTnnnvPuTffQJbHFFu4BsNvoCBxBRlulqwuMBgCtQxDTEALIMggGAJPlcMRc0t1KkfRplMvhImkSbdsejqr9smckd3+rM0z2J3Yr+DeAkXpp3HwG8BbTy0GYnuWzw9ch+NNa6xLTkXxKr2lE1QQcbQitLiEyih4BfcGEcYkzo6jIsJnTGBq4XoFY/I1+rZBdZSv1Xm5keVTJVslriLDCcrVQB+5N29jqJtcXQXebvo1+gKr091O5VGGknRzjrh9n6PeWw8FlZY6K0ey0s7sGh/O/OVJn8bHDKMpwhmLWf31umtVNl10jPZ2LFD9SifR2amQqb+tNd/162B7PPQt0h6raf414qj2Pc7M/cVG3C7F0uXRdu9ncntJjp22TG8oOLj8AnX3Gv2e+Ip8eCX5P3WnizLd79hoS8uljnrKCZbW2J10J9ZA9McjlVvE08C1tka2/xp9SuS3/mjLHYoF5/VFz7tI+eDi7ETPfju9lZw2cqdF1beEuvNJH7KS/I7l4nisN6ubvLDc3RJ7kXsyTRQelmebS/KVbKNcCM3uupgP5A1hE0s2Qy/YM7LhUrLU12kZpUtbuBjaOqf6dr4f1wOkKa+PjBJcTxEYCvcWIPgYU0Ygi/Os2ROlFoCocnBAMHtUF4TyeObB281ZMSnuydHuZC57ZlbS/C22Me0IqWiwMLdTJXkFLVCQPMCUYmTElOWknmNK4RFTMPzrIVSTM8HnnGEzRmAIRKnT58WBKHd6svwn/eMSQUZhUfyRYQZaICT5eY7BkJESt8DjhqRosiz1eE3sjJWx2udFTWvSOj8jufEZUwbPBRgKPaknd+Wu3L//3QIZvrKnZ5pMJaEFwphQ5mVlkeYQfRjq4ycMgrzMmFNngdYsMAFD/nMbMxZnR9qkU2aQBFFcYa3hDoYhTCm+twDCVRzgBg+cjOtyMb/Itg3H1UI+7bemUdhNuaI8ex7BPJIEJMAXQeiELx0koRd/IPovnY4o9aWAD/pIAk0Jnu3a3Pmle/YTbWZI/C6B4/KyX3v5hU+OsaHAPHk44Ck7Jhh9VNaHQVIWbp7g7De4hT7ucTdvNa5F0b90kVWnNxRIxFny3+E+7QSG3z5HpJajBm+rTAb6ttcHjVpNnB8tMBTEH12QweY40CFJmo37vzI0GAgzGKcUDIG20uQqyM3REq5rcplMlMtR0Y4K+JTto/We3nZ6G6+a7zIvFVPXnul51CYDM+izPEBUSb3rKNI3ZHRWldHrT0DAEKR0y08nXDBOBuOR7RezytkUfnCjnIouokRujlYMDmm/ZwfegGNl1D92VdWN3pLdoa1e/XzNLQ95JlFrYhEcGpwd+Zr92kR72uf7YIbu9Lf8uoLLbaEHtpNybXfl9tY4IR6TR+l673LdaQarLep2hEMAL8XatgUsaMf+zBCSXWKddL8M47UQW7MduzqJotjPofAYSun7YxC/9+vTbGGMH7P1XYX/luvT+Py99R3I+7j+hblUrxQ2s9u4K5io8HjtIk9Due3sVjNoGL5ibubrqS3Aq3m0VXBvOrpIIQtzcm6G8NmPQQukkDLls3F/NgukFjjXSlE4DLKPfgfK4zs54P4PwSdNVIYIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Darknet",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

