package com.splitrn_0725;

import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.facebook.react.ReactInstanceManager;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

public class MainActivity extends PreBaseInit {

    @Override
    public String getJSBundleAssetName(){
        return "index.android.bundle";
    };

    @Override
    public String getJsModulePathPath(){
        return "index";
    };

    @Override
    public String getResName() {
        return "splitRn_0725";
    };

    @Override
    public void preInit() {
        // 获取访问权限
        try {
            InputStream is = getResources().getAssets().open("read.txt");
            Reader in = new InputStreamReader(is);
            BufferedReader bufferedReader = new BufferedReader(in);
            String line = null;
            while (null != (line = bufferedReader.readLine()) ){
                System.out.println("assets file==========" + line);
            }

            bufferedReader.close();
            in.close();
            is.close();
            // 写文件

            boolean isCopy = true;
            AssetManager mAssetManger = getResources().getAssets();

            Log.i("TAG", "preInit: "+getFilesDir().getAbsolutePath());
        }catch (Exception e){
            Log.e("err",e.getMessage() );
        }

    }

}