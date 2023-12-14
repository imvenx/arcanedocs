using System;
using ArcanepadSDK.Models;
using ArcanepadSDK.Types;
using Newtonsoft.Json;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class PadManager : MonoBehaviour
{
    public Button AttackButton;
    public TextMeshProUGUI LogsText;

    async void Awake()
    {
        Arcane.Init(new ArcaneInitParams(deviceType: ArcaneDeviceType.pad, padOrientation: AOrientation.Portrait));

        await Arcane.ArcaneClientInitialized();

        AttackButton.onClick.AddListener(OnAttackButtonPress);

        // Arcane.Pad.On("TakeDamage", (TakeDamageEvent e) => { LogsText.text += "Taken Damage" + e.damage; });
        Arcane.Pad.On("TakeDamage", new Action<TakeDamageEvent>(TakeDamage));
    }

    void TakeDamage(TakeDamageEvent e)
    {
        Debug.Log("aaaaaaaaaaaa");
        LogsText.text += "Taken Damage" + e.damage;
    }

    void OnAttackButtonPress()
    {
        Arcane.Msg.EmitToViews(new ArcaneBaseEvent("Attack"));
    }


}
