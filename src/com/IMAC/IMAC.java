package com.IMAC;
//<editor-fold defaultstate="collapsed" desc="                                  IMPORTS">

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipboardManager;
import android.content.Context;
import static android.content.Context.CLIPBOARD_SERVICE;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Align;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.View.OnTouchListener;
import android.view.Window;
import android.view.WindowManager;
import android.view.WindowManager.LayoutParams;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.SeekBar;
import android.widget.SeekBar.OnSeekBarChangeListener;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.ToggleButton;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
//</editor-fold>

// getContentResolver().delete(imageUri, null, null);
public class IMAC extends Activity implements java.lang.Thread.UncaughtExceptionHandler {
    //<editor-fold defaultstate="collapsed" desc="                              VARS">
    private final Activity              FAct = this;
    private final String                StorageDirectory = Environment.getExternalStorageDirectory() + "";
    private final String                DCIM = StorageDirectory + "/DCIM";
    private final String                IMAC = DCIM + "/IMAC";
    private final Functions             fnc = new Functions();
    private String                      FileName = IMAC + "/00000";
    private TextView                    TInfo;
    private ScrollView                  LayWindowScroll;
    private LinearLayout                SizePicOpt;
    private LinearLayout                MainW;
    
    private Button                      BSetD;
    
    private EditText                    WSize;
    private EditText                    HSize;
    private TextView                    NewSize;
    
    int                                 IResGbl = R.drawable.aaa002b;
    
    private EditText                    NPixLeft;
    private EditText                    NPixRigth;
    private EditText                    NPixTop;
    private EditText                    NPixBottom;
    
    
    private int                         OpCentr = 0;
    //
    private int                         W_IM;
    private int                         H_IM;
    private int                         ILeft;
    private int                         IRigth;
    private int                         ITop;
    private int                         IBottom;
    
    private int                         ETextID = 0;
    
    private CheckBox                    ChBRedim;
    private CheckBox                    ChBCuadrar;
    
    
    
    
    private LinearLayout                LayWindow = null;
    private Button                      BNewText;
    private Button                      BDeleteText;
    private ToggleButton                Deline;
    
    
    
    private final int                   NLetters = 16;
    private final Str2Poit              s2p[] = new Str2Poit[NLetters];
    private int                         Inds2p = 0;
    private int                         Cnts2p = 0;
    private EditText                    TFSize;
    private SeekBar                     skR;
    private boolean                     BFocusR = false;
    private boolean                     BFocusSp = false;
    private boolean                     BFocusSpLoc = false;
    private boolean                     BFocusTIn = false;
    private boolean                     BFocusDelin = false;
    private boolean                     BFocusTFSize = false;
    
    private Uri                         selectedImageUri;
    
    private SeekBar                     skG;
    private SeekBar                     skB;
    private Spinner                     SpText;
    private Spinner                     SpLoca;
    
    private EditText                    TIn;
    private ImageView                   image;
    private LinearLayout                LLTOpt;
    private Bitmap                      bmOr = null;
    private Bitmap                      bm = null;
    
    private int                         PosX = 1;
    private int                         PosY = 1;
    
    
    
    private boolean                     OpTVis = false;
    private boolean                     TextVis = true;
    
    private boolean                     MWat = false;
    private int                         Col0 = 0;
    private int                         Inds2pI = 0;
    
    
//</editor-fold>
    @Override
    public void onCreate(Bundle savedInstanceState){
        Thread.setDefaultUncaughtExceptionHandler( this );
        new File(DCIM).mkdir();
        new File(IMAC).mkdir();
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.main);
        TInfo  = (TextView)findViewById(R.id.TInfo);
        TInfo.setText( "0 Seg( Detenido )" );
        TInfo.setVisibility( View.GONE );
        
        
        MainW = (LinearLayout)findViewById(R.id.MainW);
        
        NewSize  = (TextView)findViewById(R.id.NewSize);
        LayWindowScroll = (ScrollView)findViewById(R.id.LayWindowScroll);
        LayWindow = (LinearLayout)findViewById(R.id.LayWindow);
        
        
        SizePicOpt = (LinearLayout)findViewById(R.id.SizePicOpt);
        
        BSetD = (Button)findViewById(R.id.BSetD);
        BSetD.setOnClickListener( new OnClickListener(){
            public void onClick(View v){
                ETextID = 0;
                HideKeyB();
                if( ChBRedim.isChecked() ){
                    String atoiW = "" + WSize.getText();
                    if( atoiW.isEmpty() ){
                        W_IM = bmOr.getWidth();
                        WSize.setText( "" + W_IM );
                        H_IM = bmOr.getHeight();
                        HSize.setText( "" + H_IM );
                    }
                    String atoiH = "" + HSize.getText();
                    if( atoiH.isEmpty() ){
                        W_IM = bmOr.getWidth();
                        WSize.setText( "" + W_IM );
                        H_IM = bmOr.getHeight();
                        HSize.setText( "" + H_IM );
                    }
                }
                SetTextIm();
            }
        });
        
        
        
        
        OnTouchListener OTouchWHw = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                ETextID = v.getId();
                v.onTouchEvent(event);
                return true;
            }
        };
        WSize = (EditText)findViewById(R.id.WSize);
        WSize.addTextChangedListener(new TextWatcher() {
            @Override
            public void afterTextChanged(Editable s) {
                
                
                NPixRigth.setText( "0" );
                NPixTop.setText( "0" );
                NPixBottom.setText( "0" );
                NPixLeft.setText( "0" );
                
                IRigth = 0;
                ITop = 0;
                IBottom = 0;
                ILeft = 0;
                if( ETextID==WSize.getId() ){
                    String atoi = "" + WSize.getText();
                    if( atoi.isEmpty() ){
                        return;
                    }
                    W_IM = Integer.parseInt(atoi);
                    if( W_IM<1 ){
                        W_IM = 1;
                        WSize.setText( "" + W_IM );
                        return;
                    }
                    if( W_IM>2999 ){
                        W_IM = 2999;
                        if( ChBRedim.isChecked() ){
                            H_IM = (int)( W_IM * ( (double)bmOr.getHeight()/(double)bmOr.getWidth() ) );
                            while( H_IM>2999 ){
                                W_IM--;
                                H_IM = (int)( W_IM * ( (double)bmOr.getHeight()/(double)bmOr.getWidth() ) );
                            }
                        }
                        WSize.setText( "" + W_IM );
                        return;
                    }
                    if( ChBRedim.isChecked() ){
                        H_IM = (int)( W_IM * ( (double)bmOr.getHeight()/(double)bmOr.getWidth() ) );
                        if( H_IM>2999 ){
                            while( H_IM>2999 ){
                                W_IM--;
                                H_IM = (int)( W_IM * ( (double)bmOr.getHeight()/(double)bmOr.getWidth() ) );
                            }
                            WSize.setText( "" + W_IM );
                            return;
                        }
                        HSize.setText( "" + H_IM );
                    }
                }
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });
        
        WSize.setOnTouchListener(OTouchWHw);
        
        
        HSize = (EditText)findViewById(R.id.HSize);
        HSize.setOnTouchListener(OTouchWHw);
        HSize.addTextChangedListener(new TextWatcher() {
            @Override
            public void afterTextChanged(Editable s) {
                
                
                NPixRigth.setText( "0" );
                NPixTop.setText( "0" );
                NPixBottom.setText( "0" );
                NPixLeft.setText( "0" );
                
                IRigth = 0;
                ITop = 0;
                IBottom = 0;
                ILeft = 0;
                
                if( ETextID==HSize.getId() ){
                    String atoi = "" + HSize.getText();
                    if( atoi.isEmpty() ){
                        return;
                    }
                    H_IM = Integer.parseInt(atoi);
                    if( H_IM<1 ){
                        H_IM = 1;
                        HSize.setText( "" + H_IM );
                        return;
                    }
                    if( H_IM>2999 ){
                        H_IM = 2999;
                        if( ChBRedim.isChecked() ){
                            W_IM = (int)( H_IM * ( (double)bmOr.getWidth()/(double)bmOr.getHeight() ) );
                            while( H_IM>3999 ){
                                H_IM--;
                                W_IM = (int)( H_IM * ( (double)bmOr.getWidth()/(double)bmOr.getHeight() ) );
                            }
                        }
                        HSize.setText( "" + H_IM );
                        return;
                    }
                    
                    
                    if( ChBRedim.isChecked() ){
                        W_IM = (int)( H_IM * ( (double)bmOr.getWidth()/(double)bmOr.getHeight() ) );
                        if( W_IM>2999 ){
                            while( W_IM>2999 ){
                                H_IM--;
                                W_IM = (int)( H_IM * ( (double)bmOr.getWidth()/(double)bmOr.getHeight() ) );
                            }
                            HSize.setText( "" + H_IM );
                            return;
                        }
                        WSize.setText( "" + W_IM );
                    }
                }
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });
                
        ChBRedim = (CheckBox)findViewById(R.id.ChBRedim);
        ChBRedim.setOnClickListener( new OnClickListener(){
            public void onClick(View v){
                HideKeyB();
                ETextID = 0;
                final String atoiW = "" + WSize.getText();
                if( atoiW.isEmpty() ){
                    W_IM = bmOr.getWidth();
                    H_IM = bmOr.getHeight();
                    WSize.setText( "" + W_IM );
                    HSize.setText( "" + H_IM );
                }
                final String atoiH = "" + HSize.getText();
                if( atoiH.isEmpty() ){
                    W_IM = bmOr.getWidth();
                    H_IM = bmOr.getHeight();
                    WSize.setText( "" + W_IM );
                    HSize.setText( "" + H_IM );
                }
                if( ChBRedim.isChecked() ){
                    W_IM = bmOr.getWidth();
                    H_IM = bmOr.getHeight();
                    WSize.setText( "" + W_IM );
                    HSize.setText( "" + H_IM );
                }
                //}
                // SetTextIm();
            }
        });
        
        
        
        ChBCuadrar = (CheckBox)findViewById(R.id.ChBCuadrar);
        ChBCuadrar.setOnClickListener( new OnClickListener(){
            public void onClick(View v){
                HideKeyB();
                ETextID = 0;
                if( ChBCuadrar.isChecked() ){
                    try{
                        if( W_IM>1500 || H_IM>1500 ){
                            fnc.MsgBox(FAct, "La imagen tiene una dimension mas grande a 1500,\n" + 
                                             "redimensione la imagen de tal manera que el ancho y el alto " + 
                                             "sean iguales o menores a 1500.", 
                                            " Error ");
                            ChBCuadrar.setChecked( false );
                            return;
                        }
                        if( W_IM==H_IM ){
                            fnc.MsgBox(FAct, "Acción innecesaria\n", " Informe " );
                            ChBCuadrar.setChecked( false );
                            return;
                        }
                    int MaxWH;
                    if( W_IM!=H_IM ){
                        MaxWH = Math.max( W_IM, H_IM );
                    }else{
                        MaxWH = W_IM;
                    }
                    final int IBufOr[] = new int[ W_IM * H_IM ];
                    final int IBufTemp[] = new int[ MaxWH * MaxWH ];
                    bmOr.getPixels( IBufOr, 0, W_IM, 0, 0, W_IM, H_IM );
                    Col0 = IBufOr[0];
                    for( int i=0; i<IBufTemp.length; i++ ){
                        IBufTemp[i] = fnc.RGB( 255, 255, 255 );
                        IBufTemp[i] = IBufOr[0];
                    }
                    
                    
                    
                    int XInit = (MaxWH - W_IM)/2;
                    int YInit = (MaxWH - H_IM)/2;
                    
                    // OpCentr
                    switch( OpCentr ){
                        case 0:
                            XInit = (MaxWH - W_IM)/2;
                            YInit = (MaxWH - H_IM)/2;
                            break;
                        case 1:
                            XInit = 0;
                            YInit = 0;
                            break;
                        case 2:
                            if( W_IM>H_IM ){
                                XInit = 0;
                                YInit = (MaxWH - H_IM);
                            }else{
                                XInit = (MaxWH - W_IM);
                                YInit = 0;
                            }
                            break;
                    }
                    if( OpCentr>=2 ){
                        OpCentr = 0;
                    }else{
                        OpCentr = OpCentr + 1;
                    }
                    
                    int indor;
                    int indtemp;
                    for( int y=0; y<H_IM; y++ ){
                        for( int x=0; x<W_IM; x++ ){
                            indtemp = (XInit+x) + ( YInit + y ) * MaxWH;
                            indor = x + y * W_IM;
                            IBufTemp[indtemp] = IBufOr[indor];
                            // indtemp = IBufOr[indor];
                        }
                    }
                    Bitmap BMTemp = Bitmap.createScaledBitmap( bmOr, MaxWH, MaxWH, false);
                    BMTemp.setPixels( IBufTemp, 0, MaxWH, 0, 0, MaxWH, MaxWH );
                    bmOr.recycle();
                    bmOr = BMTemp;
                    W_IM = MaxWH;
                    H_IM = MaxWH;
                    }catch( Exception ex ){
                        fnc.MsgBox(FAct, ex.getMessage(), " ");
                    }
                }else{
                    InputStream stream;
                    try {
                        if( selectedImageUri==null ){
                            bmOr = BitmapFactory.decodeResource( getResources(), IResGbl );
                        }else{
                            stream = getContentResolver().openInputStream( selectedImageUri );
                            bmOr = BitmapFactory.decodeStream(stream);
                            stream.close();
                        }
                    } catch (FileNotFoundException ex) {
                        fnc.MsgBox(FAct, ex.getMessage(), " Error " );
                        return;
                    } catch (IOException ex) {
                        fnc.MsgBox(FAct, ex.getMessage(), " Error " );
                        return;
                    }
                    W_IM = bmOr.getWidth();
                    H_IM = bmOr.getHeight();
                }
                NPixLeft.setText( "0" );
                NPixRigth.setText( "0" );
                NPixTop.setText( "0" );
                NPixBottom.setText( "0" );
                WSize.setText( "" + W_IM );
                HSize.setText( "" + H_IM );
                SetTextIm();
            }
        });
        //
        
        final TextWatcher TWat = new TextWatcher(){
            @Override
            public void afterTextChanged(Editable s){
                int Id0 = -1;
                if( ETextID==NPixLeft.getId() ){ Id0 = 0; }
                if( ETextID==NPixRigth.getId() ){ Id0 = 1; }
                if( ETextID==NPixTop.getId() ){ Id0 = 2; }
                if( ETextID==NPixBottom.getId() ){ Id0 = 3; }
                
                final int MinPixels = 2;
                String atoi;
                int WTotal;
                switch( Id0 ){
                    case 0:
                        atoi = "" + NPixLeft.getText();
                        if( atoi.isEmpty() ){
                            ILeft = 0;
                            return;
                        }
                        ILeft = Integer.parseInt(atoi);
                        WTotal = W_IM - ILeft - IRigth;
                        if( WTotal<MinPixels ){
                            while( WTotal<MinPixels ){
                                ILeft--;
                                WTotal = W_IM - ILeft - IRigth;
                            }
                            NPixLeft.setText( "" + ILeft );
                        }
                        break;
                    case 1:
                        atoi = "" + NPixRigth.getText();
                        if( atoi.isEmpty() ){
                            IRigth = 0;
                            return;
                        }
                        IRigth = Integer.parseInt(atoi);
                        WTotal = W_IM - ILeft - IRigth;
                        if( WTotal<MinPixels ){
                            while( WTotal<MinPixels ){
                                IRigth--;
                                WTotal = W_IM - ILeft - IRigth;
                            }
                            NPixRigth.setText( "" + IRigth );
                        }
                        break;
                    case 2:
                        atoi = "" + NPixTop.getText();
                        if( atoi.isEmpty() ){
                            ITop = 0;
                            return;
                        }
                        ITop = Integer.parseInt(atoi);
                        WTotal = H_IM - ITop - IBottom;
                        if( WTotal<MinPixels ){
                            while( WTotal<MinPixels ){
                                ITop--;
                                WTotal = H_IM - ITop - IBottom;
                            }
                            NPixTop.setText( "" + ITop );
                        }
                        break;
                    case 3:
                        atoi = "" + NPixBottom.getText();
                        if( atoi.isEmpty() ){
                            IBottom = 0;
                            return;
                        }
                        IBottom = Integer.parseInt(atoi);
                        WTotal = H_IM - ITop - IBottom;
                        if( WTotal<MinPixels ){
                            while( WTotal<MinPixels ){
                                IBottom--;
                                WTotal = H_IM - ITop - IBottom;
                            }
                            NPixBottom.setText( "" + IBottom );
                        }
                        break;
                    default:
                        return;
                }
                SetTextIm();
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        };
        
        
        
        NPixRigth = (EditText)findViewById(R.id.NPixRigth);
        NPixTop = (EditText)findViewById(R.id.NPixTop);
        NPixBottom = (EditText)findViewById(R.id.NPixBottom);
        NPixLeft = (EditText)findViewById(R.id.NPixLeft);
        
        NPixRigth.setOnTouchListener(OTouchWHw);
        NPixTop.setOnTouchListener(OTouchWHw);
        NPixBottom.setOnTouchListener(OTouchWHw);
        NPixLeft.setOnTouchListener(OTouchWHw);
        
        NPixRigth.addTextChangedListener(TWat);
        NPixTop.addTextChangedListener(TWat);
        NPixBottom.addTextChangedListener(TWat);
        NPixLeft.addTextChangedListener(TWat);
        
        
        
        
        
        
        
        
        
        
        
        LLTOpt = (LinearLayout)findViewById(R.id.LLTOpt);
        // LLTOpt.setVisibility( View.GONE );
        OpTVis = LLTOpt.getVisibility()==View.VISIBLE;
        TFSize = (EditText)findViewById(R.id.TFSize);
        TFSize.setTextSize( TFSize.getTextSize() - 2 );
        
        skR = (SeekBar) findViewById(R.id.seekR);
        skR.setMax( 255 );
        OnTouchListener OTouch = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusR = event.getAction()==MotionEvent.ACTION_DOWN  || 
                                    event.getAction()==MotionEvent.ACTION_MOVE;
                v.onTouchEvent(event);
                HideKeyB();
                return true;
            }
        };
        skR.setOnTouchListener(OTouch);
        skR.setOnSeekBarChangeListener( new OnSeekBarChangeListener(){
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if( BFocusR ){
                    s2p[Inds2p].Red = progress;
                    SetTextIm();
                }
            }
            public void onStartTrackingTouch(SeekBar seekBar) {}
            public void onStopTrackingTouch(SeekBar seekBar) {}
        }
        );
        skG = (SeekBar) findViewById(R.id.seekG);
        skG.setMax( 255 );
        skG.setOnTouchListener(OTouch);
        skG.setOnSeekBarChangeListener( new OnSeekBarChangeListener(){
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                s2p[Inds2p].Green = progress;
                SetTextIm();
            }
            public void onStartTrackingTouch(SeekBar seekBar) {}
            public void onStopTrackingTouch(SeekBar seekBar) {}
        }
        );
        skB = (SeekBar) findViewById(R.id.seekB);
        skB.setMax( 255 );
        skB.setOnTouchListener(OTouch);
        skB.setOnSeekBarChangeListener( new OnSeekBarChangeListener(){
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                s2p[Inds2p].Blue = progress;
                SetTextIm();
            }
            public void onStartTrackingTouch(SeekBar seekBar) {}
            public void onStopTrackingTouch(SeekBar seekBar) {}
        }
        );
        SpText = (Spinner) findViewById(R.id.SpText);
        OnTouchListener OTouch2 = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusSp = true;
                HideKeyB();
                v.onTouchEvent(event);
                return true;
            }
        };
        SpText.setOnTouchListener(OTouch2);
        SpText.setOnItemSelectedListener(new OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id){
                if( BFocusSp ){
                    try{
                    BFocusSp = false;
                    Inds2p = 15&position;
                    skR.setProgress( s2p[Inds2p].Red );
                    skG.setProgress( s2p[Inds2p].Green );
                    skB.setProgress( s2p[Inds2p].Blue );
                    Deline.setChecked( s2p[Cnts2p].SetDelin );
                    TFSize.setText( "" + s2p[Inds2p].TextSize );
                    SpLoca.setSelection( s2p[Inds2p].ILoca );
                    TIn.setText( s2p[Inds2p].Text );
                    if( BFocusTIn || BFocusTFSize ){
                        return;
                    }
                    SetTextIm();
                    }catch( Exception ex ){
                        TInfo.setText( ex.toString() );
                    }
                }
                
            }
            public void onNothingSelected(AdapterView<?> parent) {}
        });
        
        
        // BFocusSpLoc
        SpLoca = (Spinner) findViewById(R.id.SpLoca);
        OnTouchListener OTouch21 = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusSpLoc = true;
                HideKeyB();
                v.onTouchEvent(event);
                return true;
            }
        };
        SpLoca.setOnTouchListener(OTouch21);
        
        SpLoca.setOnItemSelectedListener(new OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id){
                if( BFocusSpLoc ){
                    BFocusSpLoc = false;
                    s2p[Inds2p].ILoca = position;
                    SetTextIm();
                }
            }
            public void onNothingSelected(AdapterView<?> parent) {}
        });
        String[] array_list = new String[ 6 ];
        array_list[0] = "Usuario";
        array_list[1] = "CentroH";
        array_list[2] = "CentroV";
        array_list[3] = "CentroHV";
        array_list[4] = "Izquierda";
        array_list[5] = "Derecha";
        ArrayAdapter adapter = new ArrayAdapter(FAct, android.R.layout.simple_spinner_item, array_list );
        SpLoca.setAdapter( adapter );
        
        
        
        TIn = (EditText) findViewById(R.id.TIn);
        TIn.setTextSize( TIn.getTextSize() - 2 );
        OnTouchListener OTouch3 = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusTIn = true;
                v.onTouchEvent(event);
                return true;
            }
        };
        TIn.setOnTouchListener( OTouch3 );
        
        
        
        
        final int TSizeB = 6;
        Deline = (ToggleButton) findViewById(R.id.Deline);
        Deline.setTextSize( TSizeB );
        OnTouchListener OTouchDeli = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusDelin = true;
                v.onTouchEvent(event);
                return true;
            }
        };
        Deline.setOnTouchListener(OTouchDeli);
        Deline.setOnClickListener( new OnClickListener(){
            public void onClick(View v) {
                if( BFocusDelin ){
                    BFocusDelin = false;
                    HideKeyB();
                    s2p[Inds2p].SetDelin = Deline.isChecked();
                    SetTextIm();
                }
            }
        });
        
        BNewText = (Button) findViewById(R.id.BNewText);
        BNewText.setTextSize( TSizeB );
        BNewText.setOnTouchListener(OTouchDeli);
        BNewText.setOnClickListener( new OnClickListener(){
            public void onClick(View v) {
                if( BFocusDelin ){
                    Cnts2p = 15&( Cnts2p + 1 );
                    Inds2p = Cnts2p;
                    final int LastLoc = 15&(Cnts2p-1);
                    s2p[Cnts2p].SetDelin = s2p[LastLoc].SetDelin;
                    s2p[Cnts2p].Set = s2p[LastLoc].Set;
                    s2p[Cnts2p].TextSize = s2p[LastLoc].TextSize;
                    s2p[Cnts2p].ILoca = s2p[LastLoc].ILoca;
                    s2p[Cnts2p].Red = s2p[LastLoc].Red;
                    s2p[Cnts2p].Green = s2p[LastLoc].Green;
                    s2p[Cnts2p].Blue = s2p[LastLoc].Blue;
                    RefreshSpinner();
                    skR.setProgress( s2p[Cnts2p].Red );
                    skG.setProgress( s2p[Cnts2p].Green );
                    skB.setProgress( s2p[Cnts2p].Blue );
                    TIn.setText( s2p[Cnts2p].Text );
                    SpLoca.setSelection( s2p[Cnts2p].ILoca );
                    TFSize.setText( "" + s2p[Cnts2p].TextSize );
                    Deline.setChecked( s2p[Cnts2p].SetDelin );
                }
            }
        });
        
        
        BDeleteText = (Button) findViewById(R.id.BDeleteText);
        BDeleteText.setTextSize( TSizeB );
        BDeleteText.setOnTouchListener(OTouchDeli);
        BDeleteText.setOnClickListener( new OnClickListener(){
            public void onClick(View v) {
                if( BFocusDelin ){
                    AlertDialog.Builder builder = new AlertDialog.Builder(FAct);
                        builder
                        .setTitle(" Borrar todo ")
                        .setMessage("Desea borrar todos los textos?")
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .setPositiveButton("Si.", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which){
                                for( int i=0; i<s2p.length; i++ ){
                                    s2p[i] = new Str2Poit( bm );
                                }
                                Cnts2p = 0;
                                Inds2p = 0;
                                skR.setProgress( s2p[Inds2p].Red );
                                skG.setProgress( s2p[Inds2p].Green );
                                skB.setProgress( s2p[Inds2p].Blue );
                                Deline.setChecked( s2p[Cnts2p].SetDelin );
                                RefreshSpinner();
                                TIn.setText( s2p[Inds2p].Text );
                                TFSize.setText( "" + s2p[Inds2p].TextSize );
                            }
                        })
                        .setNegativeButton("No.", null)						//Do nothing on no
                        .show();
                }
            }
        });
        
        
        for( int i=0; i<s2p.length; i++ ){
            s2p[i] = new Str2Poit( bm );
        }
        image = (ImageView) findViewById(R.id.ImMain);
        image.setFocusable(true);
        // image.getLayoutParams().height = 480;//LayoutParams.MATCH_PARENT;
        image.getLayoutParams().width = LayoutParams.MATCH_PARENT;//LayoutParams.FILL_PARENT;
        
        
        
        final OnTouchListener Listener = new OnTouchListener(){
            public boolean onTouch(View v, MotionEvent event){
                // if ( event.getAction()==MotionEvent.ACTION_UP ) {
                if( event.getAction()==MotionEvent.ACTION_DOWN ){
                    HideKeyB();
                }
                try{
                    PosX = (int)( (((double)event.getX())/(double)image.getWidth() ) *  bm.getWidth() );
                    PosY = (int)( (((double)event.getY())/(double)image.getHeight() ) *  bm.getHeight() );
                    s2p[Inds2p].Px = PosX;
                    s2p[Inds2p].Py = PosY;
                    // TInfo.setText( PosX + " : " + PosY );TInfo.setVisibility( View.VISIBLE );
                    SetTextIm();
                }catch( Exception ex ){
                    fnc.MsgBox(FAct, ex.getMessage(), " error ");
                }
                // }
                return false;
            }
        };
        image.setOnTouchListener( Listener );
        TIn.addTextChangedListener(new TextWatcher() {
            @Override
            public void afterTextChanged(Editable s) {
                if( BFocusTIn ){
                    s2p[Inds2p].Text = TIn.getText().toString().intern();
                    SetTextIm();
                }
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
                // TODO Auto-generated method stub
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                // TODO Auto-generated method stub
            }
        });
        
        
        
        OnTouchListener OTouch4 = new OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                BFocusTIn = false;
                BFocusTFSize = true;
                v.onTouchEvent(event);
                return true;
            }
        };
        TFSize.setOnTouchListener( OTouch4 );
        
        
        
        TFSize.addTextChangedListener(new TextWatcher() {
            @Override
            public void afterTextChanged(Editable s) {
                String atoi = "" + TFSize.getText();
                if( atoi.isEmpty() ){
                    return;
                }
                try{
                    s2p[Inds2p].TextSize = ( Integer.parseInt( atoi ) );
                    if( BFocusTFSize ){
                        SetTextIm();
                    }
                }finally{
                    
                }
                
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
                // TODO Auto-generated method stub
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                // TODO Auto-generated method stub
            }
        });
        // LoadI();
        SetProR( R.drawable.aaa002b );
    }
////////////////////////////////////////////////////////////////////////////////
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event){
        if ((keyCode == KeyEvent.KEYCODE_BACK) ) {
            
            if( LayWindowScroll.getVisibility()==View.VISIBLE ){
                LayWindowScroll.setVisibility( View.GONE );
                return true;
            }
            
            if( LayWindowScroll.getVisibility()==View.VISIBLE ){
                LayWindow.removeAllViewsInLayout();
                LayWindowScroll.setVisibility( View.GONE );
                return true;
            }
            if( !OpTVis && TextVis ){
                if( SizePicOpt.getVisibility()==View.VISIBLE ){
                    SizePicOpt.setVisibility( View.GONE );
                    TIn.setVisibility( View.VISIBLE );
                }else{
                    TIn.setVisibility( View.GONE );
                    TextVis = false;
                }
                return true;
            }
            
            if( OpTVis ){
                LLTOpt.setVisibility( View.GONE );
                SizePicOpt.setVisibility( View.VISIBLE );
                TIn.setVisibility( View.GONE );
                // image.getLayoutParams().width = 320;//LayoutParams.MATCH_PARENT;
                // image.getLayoutParams().height = 320;//480;
                OpTVis = false;
                TextVis = true;
            }else{
                TIn.setVisibility( View.VISIBLE );
                TextVis = true;
                RefreshSpinner();
                TFSize.setText( "" + s2p[Inds2p].TextSize );
                skR.setProgress( s2p[Inds2p].Red );
                skG.setProgress( s2p[Inds2p].Green );
                skB.setProgress( s2p[Inds2p].Blue );
                Deline.setChecked( s2p[Cnts2p].SetDelin );
                LLTOpt.setVisibility( View.VISIBLE );
                OpTVis = true;
                // image.getLayoutParams().width = 320;//LayoutParams.MATCH_PARENT;
                // image.getLayoutParams().height = 320;
            }
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
////////////////////////////////////////////////////////////////////////////////
    void HideKeyB(){
        if( TextVis ){
            InputMethodManager inputMethodManager = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
            inputMethodManager.hideSoftInputFromWindow(getCurrentFocus().getWindowToken(), InputMethodManager.HIDE_NOT_ALWAYS );
        }
    }
////////////////////////////////////////////////////////////////////////////////
    void RefreshSpinner(){
        final int SSel = Inds2p;
        // TInfo.setText( SSel + " " );
        String[] array_list = new String[ Cnts2p+1 ];
        for( int i=0; i<=Cnts2p; i++ ){
            int NCar = 4;
            if( s2p[i].Text.toCharArray().length<=NCar ){
                NCar = s2p[i].Text.toCharArray().length;
            }
            array_list[i] = String.copyValueOf( s2p[i].Text.toCharArray(), 0, NCar );
        }
        ArrayAdapter adapter = new ArrayAdapter(FAct, android.R.layout.simple_spinner_item, array_list );
        SpText.setAdapter( adapter );
        SpText.setSelection( SSel );
    }
////////////////////////////////////////////////////////////////////////////////
    void LoadI(){
        try {
            Intent intent = new Intent();
            intent.setType("image/*");
            intent.setAction(Intent.ACTION_GET_CONTENT);
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            startActivityForResult(intent, 1 );
            //bm = Bitmap.createBitmap( Width, Height, Bitmap.Config.ARGB_8888 );
            // bm.setPixels( plt.plot(null,0), 0, Width, 0, 0, Width, Height );
            //image.setImageBitmap( bm );
        }catch(Exception ex){
            fnc.SetTextThr(TInfo, ex.getMessage() );
        }
    }
////////////////////////////////////////////////////////////////////////////////
    void SaveI(){
        try {
            FileOutputStream out = new FileOutputStream( FileName );
            bm.compress( Bitmap.CompressFormat.JPEG, 100, out );
            out.flush();
            out.close();
            fnc.actualizarGaleria( FAct, TInfo, FileName );
            fnc.MsgBox( FAct, FileName, "Archivo guardado" );
            // bm
        }catch(Exception ex){
            fnc.SetTextThr(TInfo, ex.getMessage() );
        }
    }
////////////////////////////////////////////////////////////////////////////////
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {  
        getMenuInflater().inflate(R.menu.menu_main, menu);//Menu Resource, Menu
        HideKeyB();
        return true;  
    }
////////////////////////////////////////////////////////////////////////////////
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data){
        super.onActivityResult(requestCode, resultCode, data);
        try {
            if( requestCode==1 ){
                if( data.getData()!=null ){
                        selectedImageUri = data.getData();
                        InputStream stream = getContentResolver().openInputStream( selectedImageUri );
                        bmOr = BitmapFactory.decodeStream(stream);
                        stream.close();
                        W_IM = bmOr.getWidth();
                        WSize.setText( "" + W_IM );
                        H_IM = bmOr.getHeight();
                        HSize.setText( "" + H_IM );
                        
                        
                        NPixLeft.setText( "0" );
                        NPixRigth.setText( "0" );
                        NPixTop.setText( "0" );
                        NPixBottom.setText( "0" );
        
                        for( int i=0; i<s2p.length; i++ ){
                            s2p[i] = new Str2Poit( bmOr );
                        }
                        Inds2p = 0;
                        Cnts2p = 0;
                        skR.setProgress( s2p[Inds2p].Red );
                        skG.setProgress( s2p[Inds2p].Green );
                        skB.setProgress( s2p[Inds2p].Blue );
                        TIn.setText( s2p[Inds2p].Text );
                        TFSize.setText( "" + s2p[Inds2p].TextSize );
                        Deline.setChecked( s2p[Cnts2p].SetDelin );
                        RefreshSpinner();
                        SetTextIm();
                        FileName = Functions.GetNameFile( IMAC, "jpg" );
                        ChBCuadrar.setChecked( false );
                }else{
                    if( bm==null ){
                        System.exit( 0 );
                    }
                }
            }else{
                if( bm==null ){
                    System.exit( 0 );
                }
            }
        }catch(Exception ex){
            fnc.SetTextThr(TInfo, "Error: " + ex.getMessage() );
            if( bm==null ){
                System.exit( 0 );
            }
        }
    }
////////////////////////////////////////////////////////////////////////////////
    void SetProR( int Value ){
        try{
            final int IResI = (int)( Value );
            // fnc.MsgBox(FAct, IResI + " ==? " + R.drawable.aaa000, " ");
            // bmOr.recycle();
            // InputStream stream = getContentResolver().openInputStream( selectedImageUri );
            // bmOr = BitmapFactory.decodeStream(stream);
            bmOr = BitmapFactory.decodeResource( getResources(), IResI );
            // image.setBackgroundColor( 0x00ffffff & (~bmOr.getPixel( 0, 0 )) );
            double W_Temp = bmOr.getWidth();
            double H_Temp = bmOr.getHeight();
            double iscale = 1.1;
            while( (W_Temp<640 || H_Temp<640) && (W_Temp<1490 && H_Temp<1490) ){
                W_Temp = iscale * bmOr.getWidth();
                H_Temp = iscale * bmOr.getHeight();
                iscale = iscale + 0.1;
            }
            bmOr = Bitmap.createScaledBitmap( bmOr, (int)W_Temp, (int)H_Temp, false);
            
            
            
            
            
            W_IM = bmOr.getWidth();
            WSize.setText( "" + W_IM );
            H_IM = bmOr.getHeight();
            HSize.setText( "" + H_IM );
            

            NPixLeft.setText( "0" );
            NPixRigth.setText( "0" );
            NPixTop.setText( "0" );
            NPixBottom.setText( "0" );
                        
            for( int i=0; i<s2p.length; i++ ){
                s2p[i] = new Str2Poit( bmOr );
            }
            Inds2p = 0;
            Cnts2p = 0;
            skR.setProgress( s2p[Inds2p].Red );
            skG.setProgress( s2p[Inds2p].Green );
            skB.setProgress( s2p[Inds2p].Blue );
            TIn.setText( s2p[Inds2p].Text );
            Deline.setChecked( s2p[Cnts2p].SetDelin );
            TFSize.setText( "" + s2p[Inds2p].TextSize );
            RefreshSpinner();
            SetTextIm();
            FileName = Functions.GetNameFile( IMAC, "jpg" );
        }catch( Exception ex ){
            fnc.MsgBox(FAct, ex.getMessage(), " error ");
        }
    }
    
    
    
/// ////////////////////////////////////////////////////////////////////////
//<editor-fold defaultstate="collapsed" desc="uncaughtException">
    public void uncaughtException(Thread thread, Throwable ex) {
        try {
            StringWriter stackTrace = new StringWriter();
            ex.printStackTrace(new PrintWriter(stackTrace));
            StringBuilder errorReport = new StringBuilder();
            errorReport.append("************ CAUSE OF ERROR ************\n\n");
            errorReport.append(stackTrace.toString());
            
            FileOutputStream FOS = new FileOutputStream( IMAC + "/ERROR_IMAC.txt" );
            FOS.write( errorReport.toString().getBytes() );
            FOS.close();
            Log.e("Error", "Unhandled exception: " + errorReport.toString() );
            Toast.makeText(getApplicationContext(), " Error ", Toast.LENGTH_LONG).show();
        } catch (FileNotFoundException ex1) {
            // Logger.getLogger(explorer.class.getName()).log(Level.SEVERE, null, ex1);
        } catch (IOException ex1) {
            // Logger.getLogger(explorer.class.getName()).log(Level.SEVERE, null, ex1);
        }
        System.exit(1);
        // fnc.MsgBox( this, ex.getMessage(), " Error " );
    }
//</editor-fold>
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    boolean InitY = false;
    void OptionImage(){
        try{
            if( InitY ){
                return;
            }
            InitY = true;
            SizePicOpt.setVisibility( View.GONE );
            LayoutParams LPar;
            OnClickListener Listener = new OnClickListener(){
                        public void onClick(View v) {
                            try{
                                String atoi = "" + ((Button)v).getText();
                                if( atoi.isEmpty() ){
                                    return;
                                }
                                selectedImageUri = null;
                                // LayWindow.removeAllViewsInLayout();
                                LayWindowScroll.setVisibility( View.GONE );
                                final int IRes = Integer.parseInt( atoi );
                                IResGbl = IRes;
                                SetProR( IRes );
                            }catch( Exception ex ){
                                fnc.MsgBox(FAct, ex.getMessage(), " error ");
                            }
                        }
                    };
            Button imageView;
            LinearLayout linearLayout;
            int IIm = R.drawable.aaa001;
            for( int i=0; i<119; i++ ){
                linearLayout = new LinearLayout(this);
                linearLayout.setOrientation( LinearLayout.HORIZONTAL );
                LPar = new LayoutParams();
                LPar.x = 1;
                LPar.y = i * 80;
                LPar.width = LayoutParams.MATCH_PARENT;
                LPar.height = 80;
                linearLayout.setLayoutParams( LPar );
                for( int i2=0; i2<4; i2++ ){
                    imageView = new Button(this);
                    imageView.setTextSize( 1 );
                    imageView.setText( "" + IIm );
                    imageView.setBackgroundResource( IIm );
                    imageView.setOnClickListener(Listener);
                    LPar = new LayoutParams();
                    // LPar.x = i * 116;
                    LPar.y = 0;
                    LPar.width = 76;
                    LPar.height = 76;
                    imageView.setLayoutParams( LPar );
                    linearLayout.addView( imageView );
                    IIm++;
                }
                LayWindow.addView( linearLayout );
            }
            InitY = true;
        }catch( Exception ex ){
            // fnc.MsgBox(FAct, ex.getMessage(), " ");
        }
        
    }
////////////////////////////////////////////////////////////////////////////////
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {  
        switch (item.getItemId()){
            case R.id.LoadI:
                LoadI();
                break;
                
            case R.id.LoadIApp:
                if( LayWindowScroll.getVisibility()==View.VISIBLE ){
                    LayWindowScroll.setVisibility( View.GONE );
                }else{
                    OptionImage();
                    LayWindowScroll.setVisibility( View.VISIBLE );
                }
                break;
                
                
                
            case R.id.SaveI:
                SaveI();
                break;
                
                
            case R.id.NText:{
                Cnts2p = 15&( Cnts2p + 1 );
                Inds2p = Cnts2p;
                final int LastLoc = 15&(Cnts2p-1);
                s2p[Cnts2p].SetDelin = s2p[LastLoc].SetDelin;
                s2p[Cnts2p].Set = s2p[LastLoc].Set;
                s2p[Cnts2p].TextSize = s2p[LastLoc].TextSize;
                s2p[Cnts2p].ILoca = s2p[LastLoc].ILoca;
                s2p[Cnts2p].Red = s2p[LastLoc].Red;
                s2p[Cnts2p].Green = s2p[LastLoc].Green;
                s2p[Cnts2p].Blue = s2p[LastLoc].Blue;
                RefreshSpinner();
                skR.setProgress( s2p[Cnts2p].Red );
                skG.setProgress( s2p[Cnts2p].Green );
                skB.setProgress( s2p[Cnts2p].Blue );
                TIn.setText( s2p[Cnts2p].Text );
                SpLoca.setSelection( s2p[Cnts2p].ILoca );
                TFSize.setText( "" + s2p[Cnts2p].TextSize );
                Deline.setChecked( s2p[Cnts2p].SetDelin );
            }
                break;
                
            case R.id.TexOpt:{
                if( OpTVis ){
                    LLTOpt.setVisibility( View.GONE );
                    // image.getLayoutParams().width = 320;//LayoutParams.MATCH_PARENT;
                    // image.getLayoutParams().height = 320;//480;
                    OpTVis = false;
                }else{
                    RefreshSpinner();
                    TFSize.setText( "" + s2p[Inds2p].TextSize );
                    skR.setProgress( s2p[Inds2p].Red );
                    skG.setProgress( s2p[Inds2p].Green );
                    skB.setProgress( s2p[Inds2p].Blue );
                    Deline.setChecked( s2p[Cnts2p].SetDelin );
                    LLTOpt.setVisibility( View.VISIBLE );
                    OpTVis = true;
                    // image.getLayoutParams().width = 320;//LayoutParams.MATCH_PARENT;
                    // image.getLayoutParams().height = 320;
                }
            }
                break;
                
            case R.id.DeleteAllT:{
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                    builder
                    .setTitle(" Borrar todo ")
                    .setMessage("Desea borrar todos los textos?")
                    .setIcon(android.R.drawable.ic_dialog_alert)
                    .setPositiveButton("Si.", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which){
                            for( int i=0; i<s2p.length; i++ ){
                                s2p[i] = new Str2Poit( bm );
                            }
                            Cnts2p = 0;
                            Inds2p = 0;
                            skR.setProgress( s2p[Inds2p].Red );
                            skG.setProgress( s2p[Inds2p].Green );
                            skB.setProgress( s2p[Inds2p].Blue );
                            Deline.setChecked( s2p[Cnts2p].SetDelin );
                            RefreshSpinner();
                            TIn.setText( s2p[Inds2p].Text );
                            TFSize.setText( "" + s2p[Inds2p].TextSize );
                        }
                    })
                    .setNegativeButton("No.", null)						//Do nothing on no
                    .show();
                }
                break;
                
                
                
                
            case R.id.About:
                MWat = !MWat;
                if( MWat ){
                    Inds2pI = Inds2p;
                }
                SetTextIm();
                fnc.MsgBox(FAct, "IMAC\n" + 
                                        "Diseñado por:\n" + 
                                        "Adrian Costa.\n" + 
                                        "Email:\n" + 
                                        "adrianjocos@hotmail.com",
                                            " ");
                ClipboardManager clipboard = (ClipboardManager) getSystemService(CLIPBOARD_SERVICE);
                clipboard.setText(
                                    "by Adrian Costa. \n" +
                                    "@adrianjocos \n" + 
                                    "powered by IMAC. \n"
                                    );
                if( LayWindow==null ){
                    fnc.MsgBox(FAct, "" + LayWindow.getWidth() + "x" + LayWindow.getHeight() , " ");
                }
                break;
            case R.id.Exit:
                System.exit( 0 );
                break;
              default:  
                return super.onOptionsItemSelected(item);  
        }  
        return true;
    }
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    void SetTextIm(){
        try{
            android.graphics.Bitmap.Config bitmapConfig = bmOr.getConfig();
            if( bitmapConfig==null ){
                bitmapConfig = android.graphics.Bitmap.Config.ARGB_8888;
            }
            RefreshSpinner();
            if( bm!=null ){
                bm.recycle();
            }
            
            Bitmap bmTemp;
            if( bm!=null ){
                bm.recycle();
            }
            bm = bmOr.copy(bitmapConfig, true);
            bmTemp = Bitmap.createScaledBitmap( bm, W_IM, H_IM, false);
            bm.recycle();
            bm = Bitmap.createBitmap( bmTemp, ILeft, ITop, W_IM - IRigth - ILeft, H_IM - IBottom - ITop );
            bmTemp.recycle();
            
            NewSize.setText( "W:" + bm.getWidth() + " \nH:" + bm.getHeight() + " " );
            // final int Pix00 = ( 0x00ffffff & (~bm.getPixel( 0, 0 )) );MainW.setBackgroundColor( Pix00 );
            final int Pix00 = ~bm.getPixel( 0, 0 );
            image.setBackgroundColor( fnc.RGB( fnc.RColor( (Pix00) ), 
                                               fnc.GColor( (Pix00) ),
                                               fnc.BColor( (Pix00) ) ) );
            //
            if( MWat ){
                Canvas canvasMW = new Canvas( bm );
                Paint paintMW = new Paint(Paint.ANTI_ALIAS_FLAG);
                int WIM = bm.getWidth();
                if( WIM>bm.getHeight() ){
                    WIM = bm.getHeight();
                }
                final String AAdr = "@adrianjocos";
                final int           TextSizeMW = (int)( 2.5 * WIM / (double)AAdr.getBytes().length );
                paintMW.setTextSize(TextSizeMW);
                paintMW.setTextAlign( Align.LEFT );
                // s2p[Inds2pI].Red
                // paintMW.setColor( Color.argb( 50, fnc.RColor( s2p[Inds2pI].Red ), fnc.GColor( s2p[Inds2pI].Green ), fnc.BColor( s2p[Inds2pI].Blue )) );
                paintMW.setColor( Color.argb( s2p[Inds2pI].Green, s2p[Inds2pI].Red, s2p[Inds2pI].Green, s2p[Inds2pI].Blue ) );
                canvasMW.rotate( 45 );
                canvasMW.drawText( AAdr, TextSizeMW/3, TextSizeMW/6, paintMW );
            }
            //
            Canvas canvas = new Canvas( bm );
            Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);
            
            
            // Rect rect = new Rect(); rect.set( 0, 0, bm.getWidth(), bm.getHeight() ); paint.setColor( Pix00 );  canvas.drawRect( rect, paint);
            // Pix00
            switch( s2p[Inds2p].ILoca ){
                case 1:
                    paint.setTextAlign(Align.CENTER);
                    s2p[Inds2p].Px = bm.getWidth()/2;
                    break;
                case 2:
                    paint.setTextAlign(Align.CENTER);
                    s2p[Inds2p].Py = bm.getHeight()/2;
                    break;
                case 3:
                    paint.setTextAlign(Align.CENTER);
                    s2p[Inds2p].Px = bm.getWidth()/2;
                    s2p[Inds2p].Py = bm.getHeight()/2;
                    break;
                case 4:
                    paint.setTextAlign(Align.LEFT);
                    s2p[Inds2p].Px = 0;//s2p[Inds2p].TextSize/2;
                    break;
                case 5:
                    paint.setTextAlign(Align.RIGHT);
                    s2p[Inds2p].Px = bm.getWidth();
                    break;
            }
            // canvas.drawColor(Color.GRAY);
            // paint.setAntiAlias(true);
            // paint.setColor(Color.WHITE);
            // paint.setStrokeWidth(2.0f);
            // paint.setStrokeWidth(4);
            // paint.setStyle(Style.FILL);
            // paint.setStyle(Paint.Style.STROKE);
            // paint.setShadowLayer(5.0f, 10.0f, 10.0f, Color.BLACK);

            // paint.setStyle(Style.FILL);
            // paint.setShadowLayer(10f, 10f, 10f, Color.BLACK);
            // textPaint.setTextAlign(Paint.Align.CENTER);
            // paint.setTypeface(Typeface.DEFAULT_BOLD);
            // paint.setStyle(Style.STROKE);
            // paint.setStrokeWidth(8);

            // paint.setStrokeJoin(Join.ROUND);
            // paint.setStrokeMiter(10);
            // paint.setStrokeWidth(8);
            // paint.setColor(Color.WHITE);

            // Typeface chops = Typeface.createFromAsset( getAssets(), "ChopinScript.ttf" );
            // paint.setTypeface(chops);
            // paint.setFakeBoldText(true);
            // paint.setTypeface(Typeface.create(Typeface.DEFAULT, Typeface.ITALIC));
            Rect bounds = new Rect();
            for ( int i=0; i<=Cnts2p; i++ ) {
                switch( s2p[i].ILoca ){
                    case 1:
                        paint.setTextAlign(Align.CENTER);
                        break;
                    case 2:
                        paint.setTextAlign(Align.CENTER);
                        break;
                    case 3:
                        paint.setTextAlign(Align.CENTER);
                        break;
                    case 4:
                        paint.setTextAlign(Align.LEFT);
                        break;
                    case 5:
                        paint.setTextAlign(Align.RIGHT);
                        break;
                }

                    s2p[i].DrawText( canvas, paint, bounds );

            }
            image.setImageBitmap( bm );
        }catch( Exception ex ){
            fnc.MsgBox(FAct, ex.getMessage(), " error ");
        }
    }
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    
    private class Str2Poit{
        public String               Text = null;
        public int                  TextSize = 0;
        public int                  Red = 255;
        public int                  Green = 255;
        public int                  Blue = 255;
        public int                  ILoca = 0;
        public int                  Px = 0;
        public int                  Py = 0;
        public boolean              SetDelin = false;
        public boolean              Set = false;
        public Str2Poit( Bitmap bm ){
            Px = 0;
            if( bm!=null ){
                Py = (int)( ( (double)bm.getWidth()/8.0 ) );
                TextSize = bm.getWidth()/8;
            }else{
                Py = 16;
                TextSize = 16;
            }
            Set = false;
            Text = "New text";
        }
        ///
        public void DrawText( Canvas canvas, Paint paint, Rect bounds ){
            final int LStr = Text.length();
            final int LStr_1 = LStr - 1;
            char Chars[] = new char[LStr+2];
            Text.getChars(0, LStr, Chars, 0);
            int INLine = 0;
            int ILine = 0;
            int NChars = 0;
            double YPlus = 0;
            String Str2P;
            for( int i=0; i<(LStr+1); i++ ){
                if( Chars[i]=='\n' || i==LStr ){
                    Str2P = String.copyValueOf( Chars, INLine, NChars );
                    paint.setStyle(Paint.Style.FILL);
                    paint.setColor(Color.rgb(Red, Green, Blue));
                    paint.setTextSize(TextSize);
                    paint.getTextBounds(Str2P, 0, Str2P.length(), bounds);
                    canvas.rotate( 0 );
                    canvas.drawText( Str2P, Px, Py + (int)(ILine * (TextSize) + ILine * YPlus ), paint );
                    
                    if( SetDelin ){
                        // paint.setColor(Color.BLACK);
                        paint.setColor(Color.rgb( 255 - Red, 255 - Green, 255 - Blue));
                        paint.setStyle(Paint.Style.STROKE);
                        paint.setStrokeWidth(2);
                        canvas.drawText( Str2P, Px, Py + (int)(ILine * (TextSize) + ILine * YPlus ), paint);
                    }
                    YPlus = (double)TextSize/10.0;
                    INLine = i + 1;
                    ILine++;
                    NChars = 0;
                }else{
                    NChars++;
                }
            }
            // canvas.drawText( Text, Px, Py, paint);
            // canvas.drawText( Text, Px, Py + TextSize, paint);

        }
        ///
    }
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
}

